//place this as soon as possible in your script
const nodeConsole = require('../');

// Change the initial colour settings, 
// you can do this at any time anywhere in your script
/*** Colours Include ***/
/*  black
    white
    red
    yellow
    green
    blue
    purple
    cyan   */
nodeConsole.set({
    'log': 'purple',
    'note': 'green',
    'warn': 'yellow',
    //change the colours in the rainbow
    'rainbow': [
        'red',
        'yellow',
        'green',
        'blue',
        'purple'
    ],
    'fatal': 'red'
})


console.bold('I am bold');
console.log('I am a log');
console.log('plain', 'I am a "normal" log');
console.rainbow('I am a log, except rainbow');
console.rainbow('plain', 'I am a "normal" log, except rainbow');
console.note('I am a note');
console.error('I am error');
console.warn('I am warning');
//Fatal will exit the script after logging
console.fatal('I am fatal');