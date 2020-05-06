const express = require('express');
const Hardware = require('../models/Hardware');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/hardware/pump', auth, async (req, res) => {
  try {
    await Hardware.togglePump();
    res.status(200);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
