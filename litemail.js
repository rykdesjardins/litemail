// Entry point
const LocalProxyServer = require('./localproxy/server.js');
const ElectronWindow = require('./display/electronwindow.js');

const localServer = new LocalProxyServer().start();
const electronWindow = new ElectronWindow().cast();
