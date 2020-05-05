const express = require('express');
const userRouter = require('./routers/user');
const app = express();
const Gpio = require('onoff').Gpio;
const toggleLed = require('./rpi/led');
require('./db/db');

const PORT = process.env.PORT;
const button = new Gpio(4, 'in', 'rising', { debounceTimeout: 10 });

app.use(express.json());
app.use(userRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

/* eslint-disable-next-line no-unused-vars */
button.watch((err, value) => {
  if (err) {
    throw err;
  }

  toggleLed();
});
