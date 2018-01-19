![masthead](https://user-images.githubusercontent.com/14999498/34551427-c7c57d24-f0e7-11e7-9bcf-3037a68412d8.png)
# Work in progress
This thing is a really, really light email client built with [Electron](https://electronjs.org/). 

## Compile and run
This project uses [PReact](https://preactjs.com/) for presentation, [Less](http://lesscss.org/) for preprocessing CSS, and [Webpack](https://webpack.js.org/) to generate the ES5 JS bundle. 
There are scripts in `package.json` to compile the Less files into CSS, webpack and run electron. 

### npm run build
Will build Less, then run webpack

### npm run debug
Will build Less, run webpack, then run electron

### npm run start
Will run electron with the current build files.

## Motivation
I just thought learning Electron would be fun. It is. 
