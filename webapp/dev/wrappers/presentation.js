import { h, Component } from 'preact';

import LoadingScreen from './loadingscreen';
import Liteboxes from './liteboxes';

const WRAPPERS = {
    login : <LoadingScreen />,
    liteboxes : <Liteboxes />
};

export default class PresentationWrapper extends Component {
    constructor() {
        super();
        this.state = {
            wrapper : WRAPPERS.login
        };
    }

    componentWillMount() {
        document.addEventListener("present", this.present.bind(this));
    }

    present(event) {
        this.setState(Object.assign(this.state, { wrapper : WRAPPERS[event.detail.wrapper] }));
    }

    render() {
        return (
            <div id="presentation-wrapper">
                {this.state.wrapper}
            </div>
        );
    }
}

