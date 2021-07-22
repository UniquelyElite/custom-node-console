# custom-node-console

## Installation

```bash
npm install custom-node-console
```

## Usage

Include this as soon as possible in your program:

```js
const nodeConsole = require('custom-node-console');
```

###  Logging

Types include:

* log
* note
* rainbow
* warn
* error
* fatal

To use them, simply write:

```js
console.<type>('I am logging!')
```

Almost all the types can be used without displaying the time:

```js
console.<type>('plain', 'I am logging!')
```

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

```js
nodeConsole.set({
    '<type>': '<colour>',
    '<type>': '<colour>',
    ....
})
```

### Custom Rainbow

TO modify the colours of the rainbow option, simply add:

```js
nodeConsole.set({
    'rainbow': [
        '<colour>',
        '<colour>',
        ....
    ],
    ....
})
```