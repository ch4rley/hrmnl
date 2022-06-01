const express = require('express');
const userCtrl = require('../controllers/userCtrl');
const router = express.Router();

router.route('/:_id')
  .get(userCtrl.profile);

router.route('/:_id/edit-profile')
  .get(userCtrl.edit_profile_get)
  .put(userCtrl.edit_profile_update);

router.route('/:_id/create-profile')
  .get(userCtrl.create_profile_get)
  .post(userCtrl.create_profile_post);

router.route('/:_id/history')
  .get(userCtrl.history_get);

router.route('/:_id/HRT')
  .get(userCtrl.log_get);

module.exports = router;