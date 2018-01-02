# Initialization logic
Litemail will look for a valid, encrypted config file. If one is found, Litemail will skip the input step and will directly check if auth is correct.

## Login
User inputs email and password. Depending on the domain, Litemail will check if it's a known one (gmail for now). Otherwise, the IMAP server must be provided. 

Once the login is validated, an encrypted config file is created with the login information. 

## Retreiving the account
All inboxes are requested on every post-init. The first one (typically 'INBOX') is then queried. No message body will be fetched at that point. The list will be cached as a JSON file as well as in memory. 

## Retreiving one email
Emails are requested one by one unless a batch request is done by the user. Emails are cached individually in seperate files where the file name is the email ID. Those are plain text, UTF8 files.
