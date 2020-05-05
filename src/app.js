const express = require('express');
const userRouter = require('./routers/user');
const hardwareRouter = require('./routers/hardware');
const app = express();
require('./db/db');

const PORT = process.env.PORT;

app.use(express.json());
app.use(userRouter);
app.use(hardwareRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
