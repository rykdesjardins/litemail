// Entry point
global.workdir = __dirname;

const localServer = new (require('./localproxy/server'))().start();
const electronWindow = new (require('./display/electronwindow'))();
