const express = require('express');
const userCtrl = require('../controllers/userCtrl');
const router = express.Router();

// stores all users in users collection in hrmnl database
router.route('/')
  .post(userCtrl.create_user);

router.route('/:_id')
  .get(userCtrl.profile)
  .put(userCtrl.create_profile_put);

router.route('/:_id/edit-profile')
  .get(userCtrl.edit_profile_get)
  .put(userCtrl.edit_profile_update);

router.route('/:_id/create-profile')
  .get(userCtrl.create_profile_get)

router.route('/:_id/history')
  .get(userCtrl.history_get);

router.route('/:_id/HRT')
  .get(userCtrl.log_get);

module.exports = router;