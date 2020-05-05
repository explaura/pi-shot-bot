const express = require('express');
const userRouter = require('./routers/user');
const app = express();
require('./db/db');

const port = process.env.PORT;

app.use(express.json());
app.use(userRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
