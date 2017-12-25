import gapi from './api/gapi';
import { h, render } from 'preact';

import HeaderWrapper from './wrappers/header';
import PresentationWrapper from './wrappers/presentation';

global.addEventListener('blur',  () => { document.body.classList.add   ('inactive'); });
global.addEventListener('focus', () => { document.body.classList.remove('inactive'); });

render((
    <div id="app">
        <HeaderWrapper />
        <PresentationWrapper />
    </div>
), document.body);
