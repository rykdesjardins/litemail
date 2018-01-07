import { h, Component } from 'preact';

export default class Spinner extends Component {
    render() {
        return (
            <div className={"spinner-wrapper " + (this.props.visible ? "visible" : "")}>
                <i className="spinner fal fa-spinner-third fa-spin"></i>
            </div>
        );
    }
}

