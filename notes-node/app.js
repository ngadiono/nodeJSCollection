console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes');

console.log('Result: ', notes.add(3, 4));

// var user = os.userInfo();
//
// fs.appendFile('Greeting.txt', `Hello ${user.username}! You are ${notes.age}.`);
