const express = require('express');
const siteCtrl = require('../controllers/userCtrl');
const router = express.Router();

router.route('/user/:_id')
  .get(siteCtrl.profile)

router.route('/user/:_id/edit-profile')
  .get(siteCtrl.edit_profile_get)
  .put(siteCtrl.edit_profile_update);

router.route('/user/:_id/create-profile')
  .get(siteCtrl.create_profile_get)
  .post(siteCtrl.create_profile_post);

router.route('/user/:_id/history')
  .get(siteCtrl.history_get);

router.route('/user/:_id/HRT')
  .get(siteCtrl.log_get);

module.exports = router;