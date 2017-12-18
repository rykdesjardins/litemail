const HTTP = require('http');
const path = require('path');

const CONFIG = require('../config');
const WEBROOT = path.join(global.workdir, 'webapp/build');
const ProxyRequest = require('./proxyrequest');

module.exports = class LocalProxyServer {
    constructor() {
        this.server = HTTP.createServer(this.incoming.bind(this));
    }

    start() {
        this.server.listen(CONFIG.port);
    }

    incoming(req, resp) {
        const prequest = new ProxyRequest(WEBROOT, req, resp);
    }
}
