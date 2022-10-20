const express = require('express');
const router = express.Router();
const plantsRoute = require('./plants')
router.use('/plants', plantsRoute);

module.exports = router;