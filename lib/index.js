let colours = {
    'black': '\x1b[30m',
    'white': '\x1b[37m',
    'red': '\x1b[31m',
    'yellow': '\x1b[33m',
    'green': '\x1b[32m',
    'blue': '\x1b[34m',
    'purple': '\x1b[35m',
    'cyan': '\x1b[36m'
};

let settings = {
    'log': colours.purple,
    'note': colours.green,
    'warn': colours.yellow,
    'error': colours.red,
    'rainbow': [
        colours.red,
        colours.yellow,
        colours.green,
        colours.blue,
        colours.purple
    ],
    'fatal': colours.red
};

const set = (newSettings) => {
    Object.keys(newSettings).forEach((key) => {
        if (typeof(newSettings[key]) === 'object' && key === 'rainbow') {
            settings[key] = newSettings[key].map((colour) => {
                return colours[colour];
            })
        } else {
            settings[key] = colours[newSettings[key]];
        };
    });
};



module.exports = { set }

let orig = console.log;
console.log = function () {
	let date = new Date().toISOString();
	orig.apply(console, arguments[0] === 'plain' ?
        [...arguments].filter((arg, index) => index > 0) : [
            `${settings.log}%s\x1b[0m`,
            `${date.replace(/.+T/, '').replace(/\..+/, ' at ' + date.replace(/.+\./, '').match(/(\d+)/)[0] + 'ms:')}`,
            ...arguments
        ]);
}
const rainbowify = (string) => {
	let word = '';
	string.match(/.{1,5}/g).forEach(chars => {
		word += [...chars].map((char, index) => {
			x = settings.rainbow[index%settings.rainbow.length] + char
			return x
		}).join('');
	});
	return word + '\x1b[0m';
}
console.rainbow = function () {
	let date = new Date().toISOString();
	orig.apply(console, arguments[0] === 'plain' ? [
		[...arguments].filter((arg, index) => index > 0).map(arg => rainbowify(arg)).join('')
	] : [
        `${settings.log}%s\x1b[0m`,
        `${date.replace(/.+T/, '').replace(/\..+/, ' at ' + date.replace(/.+\./, '').match(/(\d+)/)[0] + 'ms:')}`,
        [...arguments].map(arg => rainbowify(arg)).join('')
    ]);
}
console.bold = function () {
	let y = ['*'.repeat(arguments[0].replace(/\x1B\[\d+\w/g, '').length + 4)].map(arg => rainbowify(arg)).join('')
	orig.apply(console, [y]);
	orig.apply(console, [
        rainbowify('*'),
        ...arguments,
        rainbowify('*')
    ]);
	orig.apply(console, [y]);
}
console.warn = function () {
	let date = new Date().toISOString();
	orig.apply(console, arguments[0] === 'plain' ? [
        `${settings.warn}[WARNING]\x1b[0m`,
        [...arguments].filter((arg, index) => index > 0).join('')
    ] : [
        `${settings.log}%s\x1b[0m`,
        `${date.replace(/.+T/, '').replace(/\..+/, ' at ' + date.replace(/.+\./, '').match(/(\d+)/)[0] + 'ms:')}`,
        `${settings.warn}[WARNING]\x1b[0m`,
        ...arguments
    ]);
}
console.error = function () {
	let date = new Date().toISOString();
    orig.apply(console, arguments[0] === 'plain' ? [
        `${settings.error}[ERROR]\x1b[0m`,
        [...arguments].filter((arg, index) => index > 0).join('')
    ] : [
        `${settings.log}%s\x1b[0m`,
        `${date.replace(/.+T/, '').replace(/\..+/, ' at ' + date.replace(/.+\./, '').match(/(\d+)/)[0] + 'ms:')}`,
        `${settings.error}[ERROR]\x1b[0m`,
        ...arguments
    ]);
};
console.fatal = function () {
	let date = new Date().toISOString();
	orig.apply(console, arguments[0] === 'plain' ? [
        `${settings.fatal}[FATAL ERROR]\x1b[0m`,
        [...arguments].filter((arg, index) => index > 0).join('')
    ] : [
        `${settings.log}%s\x1b[0m`,
        `${date.replace(/.+T/, '').replace(/\..+/, ' at ' + date.replace(/.+\./, '').match(/(\d+)/)[0] + 'ms:')}`,
        `${settings.fatal}[FATAL ERROR]\x1b[0m`,
        ...arguments
    ]);
	process.exit(1);
}
console.note = function() {
    let date = new Date().toISOString();
    orig.apply(console, arguments[0] === 'plain' ? [
        `${settings.note}[NOTE]\x1b[0m`,
        [...arguments].filter((arg, index) => index > 0).join('')
    ] : [
        `${settings.log}%s\x1b[0m`,
        `${date.replace(/.+T/, '').replace(/\..+/, ' at ' + date.replace(/.+\./, '').match(/(\d+)/)[0] + 'ms:')}`,
        `${settings.note}[NOTE]\x1b[0m`,
        ...arguments
    ]);
};