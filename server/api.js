const express = require('express');
const developers = require('./developers');
const router = express.Router();

router.use('/developers', developers);

module.exports = router;