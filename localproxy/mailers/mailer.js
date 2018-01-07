const Imap = require('imap');

module.exports = class VirtualMailer {
    constructor(type, config) {
        this.type = type;
        this.config = config;
        this.displayname = this.type.charAt(0).toUpperCase() + this.type.substring(1);
    }

    authenticate(user, password, done) {
        log(this.displayname, 'Initializing auth connection test');
        this.imap = new Imap(Object.assign(this.config, {
            user, password 
        }));

        this.imap.once('ready', () => {
            log(this.displayname, 'Received ready event from auth request');
            done();
        });

        this.imap.once('error', (err) => {
            log(this.displayname, 'Error caught ' + err);
            done(err);
        });

        log(this.displayname, 'Sending connection request');
        this.imap.connect();
    }

    getMailboxes(done) {

    }

    getSingleMailbox(id, done) {

    }

    getSingleMail(id, done) {

    }

    sendMail(mailobject, done) {

    }
}
