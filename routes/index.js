const express = require('express');

// require routers
const siteRouter = require('./siteRouter');
//const otherRouter = require('./otherRouter');

const router = express.Router();

router.use('/', siteRouter);
router.use('/user', userRouter);
    
//router.use('/other', otherRouter);


// expose this to the rest of the app
module.exports = router;