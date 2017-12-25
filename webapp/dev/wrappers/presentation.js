import { h, Component } from 'preact';

import LoadingScreen from './loadingscreen';

export default class PresentationWrapper extends Component {
    constructor() {
        super();
    }

    componentWillMount() {
        document.addEventListener("present", this.present.bind(this));
    }

    present(event) {
        
    }

    render() {
        return (
            <div id="presentation-wrapper">
                <LoadingScreen />
            </div>
        );
    }
}

