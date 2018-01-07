import { h, Component } from 'preact';
import Spinner from '../reusable/spinner';
import { Authenticate } from '../lib/backend';
import { Present } from '../lib/present';

const VALID_STATE = {
    PENDING : 0,
    LOGGEDIN : 1,
    INVALID : 2
};

export default class LoadingScreen extends Component {
    constructor() {
        super();

        this.values = {
            initemail : "",
            initpass : ""
        }

        this.state.activeForm = true;
        this.state.spinner = false;
        this.state.validState = VALID_STATE.PENDING;
    }

    sendInitAuthCombo() {
        Authenticate(this.values.initemail, this.values.initpass).then(() => {
            Present("liteboxes");
        }, () => {
            this.setState(Object.assign(this.state, { validState : VALID_STATE.INVALID, spinner : false, activeForm : true }));
            setTimeout(() => {
                this.setState(Object.assign(this.state, { validState : VALID_STATE.PENDING }));
            }, 5000);
        });
    }

    hideForm(done) {
        this.setState(Object.assign(this.state, { activeForm : false }));
        setTimeout(() => {
            this.setState(Object.assign(this.state, { spinner : true }));
            done && done();
        }, 200);
    }

    validForm() {
        return this.values.initemail.trim() && this.values.initpass.trim();
    }

    inputKeyDown(ev) {
        this.values[ev.target.id] = ev.target.value;

        if (ev.keyCode == 13 && this.validForm()) {
            this.hideForm(() => {
                this.sendInitAuthCombo();
            });
        }
    }

    render() {
        return (
            <div id="loading-screen">
                <img src="assets/envelop.png" id="big-envelop"  />
                <form id="initloginform">
                    {
                        this.state.spinner ? null : (
                            <div>
                                <input onKeyDown={this.inputKeyDown.bind(this)} className={this.state.activeForm ? "visible" : "invisible"} placeholder="Email" type="text" id="initemail" />
                                <input onKeyDown={this.inputKeyDown.bind(this)} className={this.state.activeForm ? "visible" : "invisible"} placeholder="Password" type="password" id="initpass" />
                            </div>
                        )
                    }
                    <Spinner visible={this.state.spinner} />
                </form>
            </div>
        );
    }
}
