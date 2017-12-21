import { h, Component } from 'preact';

export default class HeaderWrapper extends Component {
    constructor() {
        super();
        this.state = {
            title : "Litemail"
        }
    }

    render() {
        return (
            <header>
                <span id="wintitle">{this.state.title}</span>
            </header>
        );
    }
}
