import { h, Component } from 'preact';

export default class LoadingScreen extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div id="loading-screen">
                <img src="assets/envelop.png" id="big-envelop"  />
                <form id="initloginform">
                    <input placeholder="Email" type="text" id="initemail" />
                    <input placeholder="Password" type="password" id="initpass" />
                </form>
            </div>
        );
    }
}
