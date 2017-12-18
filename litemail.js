require('./runtime/configure');

const localServer = new (require('./localproxy/server'))().start();
const electronWindow = new (require('./display/electronwindow'))();
