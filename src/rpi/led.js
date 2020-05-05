const Gpio = require('onoff').Gpio;
const led = new Gpio(17, 'out');

const toggleLed = () => {
  led.writeSync(led.readSync() ^ 1);
};

module.exports = toggleLed;
