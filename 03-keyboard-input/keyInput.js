//----------------------------------------------------------------------------------------------------------------------
// Challenge 3: Keyboard input
//----------------------------------------------------------------------------------------------------------------------

const keypress = require('keypress');

//----------------------------------------------------------------------------------------------------------------------

// Set up the keypress library
keypress(process.stdin);

console.log('Press CTRL + d to exit.');

// listen for the "keypress" event
process.stdin.on('keypress', function (ch, key)
{
    // Code goes here
});

//----------------------------------------------------------------------------------------------------------------------

process.stdin.setRawMode(true);
process.stdin.resume();

//----------------------------------------------------------------------------------------------------------------------