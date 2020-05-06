const mongoose = require('mongoose');
const Gpio = require('onoff').Gpio;
const pump = new Gpio(17, 'out');

const hardwareSchema = mongoose.Schema();

hardwareSchema.statics.togglePump = async function () {
  return pump.writeSync(pump.readSync() ^ 1);
};

const Hardware = mongoose.model('Hardware', hardwareSchema);

module.exports = Hardware;
