const Mailer = require('./virtual');
const Imap = require('imap');

module.exports = class GmailMailer extends Mailer {
    constructor() {
        super('gmail', {
            "host" : "imap.gmail.com",
            "port" : 993,
            "tls" : true
        });
    }

    authenticate(user, password, done) {
        log('Gmail', 'Initializing auth connection test');
        this.imap = new Imap(Object.assign(this.config, {
            user, password 
        }));

        this.imap.once('ready', () => {
            log('Gmail', 'Received ready event from auth request');
            done();
        });

        this.imap.once('error', (err) => {
            log('Gmail', 'Error caught ' + err);
            done(err);
        });

        log('Gmail', 'Sending connection request');
        this.imap.connect();
    }
}
