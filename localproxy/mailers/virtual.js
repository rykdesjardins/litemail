module.exports = class VirtualMailer {
    constructor(type, config) {
        this.type = type;
        this.config = config;
    }

    authenticate(user, pass, done) {
        throw new Error(`Mailer ${this.type} does not implement authenticate virtual method.`);
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
