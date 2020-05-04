const Gpio = require('onoff').Gpio;
const led = new Gpio(17, 'out');
const button = new Gpio(4, 'in', 'rising', { debounceTimeout: 10 });

/* eslint-disable-next-line no-unused-vars */
button.watch((err, value) => {
  if (err) {
    throw err;
  }

  led.writeSync(led.readSync() ^ 1);
});

process.on('SIGINT', () => {
  led.unexport();
  button.unexport();
});
