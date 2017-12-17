const HTTP = require('http');
const CONFIG = require('../config');

module.exports = class LocalProxyServer {
    constructor() {
        this.server = HTTP.createServer(this.incoming.bind(this));
    }

    start() {
        this.server.listen(CONFIG.port);
    }

    incoming(req, resp) {
        resp.end("Hello, World!");
    }
}
