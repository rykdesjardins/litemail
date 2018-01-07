const fs = require('fs');
const path = require('path');
const url = require('url');

const getDataType = ext => {
    switch (ext) {
        case "js": case "css": case "html": case "json":
            return "utf8";
        default:
            return "binary";
    }
};

const getContentType = ext => {
    switch (ext) {
        case "js"   : return "text/javascript";
        case "css"  : return "text/css";
        case "html" : return "text/html";
        case "json" : return "application/json";
        case "jpg"  :
        case "jpeg" : return "image/jpeg";
        case "png"  : return "image/png";
        case "svg"  : return "image/svg+xml";
        case "woff2": return "font/woff";
        case "woff" : return "font/woff2";
        case "eot"  : return "application/vnd.ms-fontobject";
        case "ttf"  : return "font/ttf";
        
        default     : return "application/litemail"
    }
};

const SUPPORTED_EXT = ["js", "css", "png", "jpg", "jpeg", "json", "html", "svg", "woff", "woff2", "eot", "ttf"];

module.exports = class ProxyRequest {
    constructor(webroot, req, resp) {
        this.req = req;
        this.resp = resp;
        this.url = url.parse(this.req.url);

        this.abspath = path.join(webroot, this.url.pathname);
        this.ext = this.abspath.substring(this.abspath.lastIndexOf('.') + 1);
        this.path = this.url.path.substring(1).split('/');
        this.endpoint = this.path[0];
    }

    readPostData(done) {
        this.rawpostdata = "";
        this.req.on('data', dat => {
            this.rawpostdata += dat;
        });

        this.req.on('end', () => { 
            try {
                this.postdata = JSON.parse(this.rawpostdata);
            } catch(ex) {
            
            }

            done && done(this.postdata || this.rawpostdata); 
        });
    }

    isStatic() {
        return SUPPORTED_EXT.includes(this.ext);
    }

    sendJSON(json) {
        this.resp.writeHead(200, { "content-type" : "application/json" });
        this.resp.end(JSON.stringify(json));
    }

    throwHTTP(code, message) {
        this.resp.writeHead(code);
        this.resp.end(message);
    }

    sendStatic() {
        log('ProxyRequest', `Sending static file with path : ${this.abspath} [${getDataType(this.ext)}]`);
        fs.access(this.abspath, err => {
            if (err) {
                this.resp.writeHead(404);
                this.resp.end();
            } else {
                this.resp.writeHead(200, { "content-type" : getContentType(this.ext) });
                fs.createReadStream(this.abspath/*, { encoding : getDataType(this.ext) }*/).pipe(this.resp);
            }
        });
    }
}
