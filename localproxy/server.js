const HTTP = require('http');
const path = require('path');

const CONFIG = require('../config');
const WEBROOT = path.join(global.workdir, 'webapp');

const ProxyRequest = require('./proxyrequest');
const Handler = require('./handler');

module.exports = class LocalProxyServer {
    constructor() {
        log('ProxyServer', 'Building Local Proxy Server');
        this.server = HTTP.createServer(this.incoming.bind(this));
        this.handler = new Handler();
    }

    start() {
        log('ProxyServer', 'Listening to incoming requests on port ' + CONFIG.port);
        this.server.listen(CONFIG.port);
    }

    handle(req) {
        log('ProxyServer', `Handling request for : ${req.url.pathname} [${req.isStatic() ? "" : "not "}static]`);
        if (req.isStatic()) {
            req.sendStatic();
        } else {
            this.handler.handle(req);
        }
    }

    incoming(req, resp) {
        this.handle(new ProxyRequest(WEBROOT, req, resp));
    }
}
