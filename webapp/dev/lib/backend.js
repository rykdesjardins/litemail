import fetch from 'unfetch';

export function Authenticate(mail, pass) {
    return new Promise((resolve, reject) => {
        fetch("/auth", {
            method : "POST",
            body : JSON.stringify({ mail, pass })
        }).then(r => {
            r.ok ? resolve(r.json()) : reject(r.json());
        });
    });
}
