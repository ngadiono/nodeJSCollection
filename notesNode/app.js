console.log('starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var user = os.userInfo();
fs.appendFileSync('greeting.txt', `Hello ${user.username}! You are ${notes.age}`);

console.log('Result : ', notes.add(4, 6));
