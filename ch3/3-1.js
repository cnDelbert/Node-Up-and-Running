EE = require('events').EventEmitter;
ee = new EE();
die = false;

ee.on('die', function() {
    die = true;
})

setTimeout(function() {
    ee.emit('die');
}, 1000)

while (!die) {
    // Looping all the time
}

console.log('done')
