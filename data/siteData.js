const { use } = require("bcrypt/promises");

let date = new Date();

module.exports = {
  userName: 'PLACEHOLDER',
  year: date.getFullYear(),
  signedIn: true,
};