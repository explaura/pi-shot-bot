const mongoose = require('mongoose');
const Gpio = require('onoff').Gpio;
const led = new Gpio(17, 'out');

const hardwareSchema = mongoose.Schema();

hardwareSchema.statics.toggleLed = async function () {
  return led.writeSync(led.readSync() ^ 1);
};

const Hardware = mongoose.model('Hardware', hardwareSchema);

module.exports = Hardware;
