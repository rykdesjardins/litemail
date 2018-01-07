const fetch = require('unfetch');
const KnownMailers = require('./knownmailers');

const knownmailers = new KnownMailers();

class Dispatch {
    static auth(req) {
        req.readPostData(() => {
            const email = req.postdata.mail;
            const pass = req.postdata.pass;
            const mailertype = knownmailers.stripMailer(email);

            if (knownmailers.supports(mailertype)) {
                const mailer = knownmailers.loadMailer(mailertype);
                mailer.authenticate(email, pass, err => {
                    req.throwHTTP(err ? 401 : 201, err && err.toString());
                });
            } else {
                req.throwHTTP(501);
            }
        });
    }
}

module.exports = class Handler {
    handle(req) {
        if (Dispatch[req.endpoint]) {
            log('Handler', 'Handling endpoint ' + req.endpoint);
            Dispatch[req.endpoint](req);
        } else {
            log('Handler', 'Throwing 404 at endpoint ' + req.endpoint);
            req.throwHTTP(404);
        }
    }
};
