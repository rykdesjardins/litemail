const Mailer = require('./mailer');

module.exports = class GmailMailer extends Mailer {
    constructor() {
        super('gmail', {
            "host" : "imap.gmail.com",
            "port" : 993,
            "tls" : true
        });
    }
}
