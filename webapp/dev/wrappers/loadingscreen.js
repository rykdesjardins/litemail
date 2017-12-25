import { h, Component } from 'preact';

export default class LoadingScreen extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div id="loading-screen">
                <img src="assets/envelop.png"  />
            </div>
        );
    }
}
