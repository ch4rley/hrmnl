const express = require('express');
const siteCtrl = require('../controllers/siteCtrl');
const router = express.Router();

// SITE ROUTES
router.route('/')
  .get(siteCtrl.index);

router.route('/login')
  .get(siteCtrl.login);

router.route('/user/_id')
  .get(siteCtrl.profile)

router.route('/user/_id/HRT');

router.route('/user/_id/edit-profile')
  .get(siteCtrl.edit_profile_get)
  .put(siteCtrl.edit_profile_update);

router.route('/user/_id/create-profile')
  .get(siteCtrl.create_profile_get)
  .post(siteCtrl.create_profile_post);

module.exports = router;

// /user/_id/log = HRT

// /user/_id/history

// do i need admin to be able to help people with their profiles?
