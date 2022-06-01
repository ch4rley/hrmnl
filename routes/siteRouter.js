const express = require('express');
const siteCtrl = require('../controllers/siteCtrl');
const router = express.Router();

// SITE ROUTES
router.route('/')
  .get(siteCtrl.index);

router.route('/login')
  .get(siteCtrl.login)
  .post(siteCtrl.login_post);

router.route('/register')
  .get(siteCtrl.register);

module.exports = router;

// /user/_id/log = HRT

// /user/_id/history

// do i need admin to be able to help people with their profiles?
