const electron = require('electron');
const path = require('path');

global.log = require('./log');

log('Runtime', 'Configuring global environment');
global.workdir = path.resolve(path.join(__dirname, '..'));
global.homedir = (electron.app || electron.remote.app).getPath('userData');
global.prefpath = path.join(global.homedir, (process.platform == 'darwin' ? "." : "") + 'litemail');
log('Runtime', 'All done');
