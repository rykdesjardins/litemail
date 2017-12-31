const SENDER_MAX_LENGTH = 12;

module.exports = (sender, msg) => {
    console.log(`[${new Date().toLocaleTimeString()} ${sender.padEnd(SENDER_MAX_LENGTH)}] - ${msg}`);
};
