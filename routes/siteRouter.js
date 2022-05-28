const express = require('express');
const siteCtrl = require('../controllers/siteCtrl');
const router = express.Router();

// SITE ROUTES
router.route('/')
  .get(siteCtrl.index);

router.route('/login')
  .get(siteCtrl.login);

router.route('/profile')
  .get(siteCtrl.profile);

router.route('/user/HRT')

module.exports = router;