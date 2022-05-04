const express = require('express');

// require routers
const siteRouter = require('./siteRouter')
//const otherRouter = require('./otherRouter');

const router = express.Router();

router.use('/', siteRouter);
//router.use('/other', otherRouter);


module.exports = router;