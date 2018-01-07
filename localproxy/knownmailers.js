const path = require('path');
const SUPPORTED = ["gmail"];

module.exports = class KnownMailers {
    supports(ext) {
        return SUPPORTED.includes(ext);
    }

    loadMailer(ext) {
        log('Knownmailers', 'Loading mailer ' + ext);
        return new (require(path.join(workdir, 'localproxy/mailers', ext)))();
    }

    stripMailer(email) {
        return email.substring(email.indexOf('@') + 1).split('.')[0];
    }
};
