# custom-node-console

## Installation

    npm install custom-node-console

## Usage

Include this as soon as possible in your program:

    const nodeConsole = require('custom-node-console');

###  Logging

Types include:

* log
* note
* rainbow
* warn
*  error
* fatal

To use them, simply write:

    console.<type>('I am logging!')
    
### Colours

Supported colours include:

* black
* white
* red
* yellow
* green
* blue
* purple
* cyan

### Custom Logging

To modify what colour a type displays, simply add:

    nodeConsole.set({
        '<type>': '<colour>',
        '<type>': '<colour>',
        ....
    })

### Custom Rainbow

TO modify the colours of the rainbow option, simply add:

    nodeConsole.set({
        'rainbow': [
            '<colour>',
            '<colour>',
            ....
        ],
        ....
    })