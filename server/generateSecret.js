const crypto = require("crypto");

const secretKey = crypto.randomBytes(32).toString("hex");

console.log(secretKey); // Prints a random 64-character hex string
