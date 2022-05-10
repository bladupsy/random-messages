const messages = [
    "Gise",
    "Anne",
    "Giovanni",
    "Ema",
    "Emily",
    "Mike",
    "Caro",
    "Ale",
    "Miki",
    "Maty",
    "Sofia"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

module.exports = { randomMsg };