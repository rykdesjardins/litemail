import gapi from './api/gapi';
import { h, render } from 'preact';
import HeaderWrapper from './wrappers/header';

global.addEventListener('blur',  () => { document.body.classList.add   ('inactive'); });
global.addEventListener('focus', () => { document.body.classList.remove('inactive'); });

render((
    <div id="app">
        <HeaderWrapper />
    </div>
), document.body);
