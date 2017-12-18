const electron = require('electron');
const path = require('path');

global.workdir = path.resolve(path.join(__dirname, '..'));
global.homedir = (electron.app || electron.remote.app).getPath('userData');
global.prefpath = path.join(global.homedir, (process.platform == 'darwin' ? "." : "") + 'litemail');
