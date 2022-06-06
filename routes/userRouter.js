const express = require('express');
const userCtrl = require('../controllers/userCtrl');
const router = express.Router();

// stores all users in users collection in hrmnl database
router.route('/')
  .post(userCtrl.create_user_post);

router.route('/:_id')
  .get(userCtrl.profile)
  .put(userCtrl.edit_profile_update);

router.route('/:_id/profile')
  .put(userCtrl.create_profile_put);

router.route('/:_id/edit-profile')
  .get(userCtrl.edit_profile_get);

router.route('/:_id/create-profile')
  .get(userCtrl.create_profile_get);

router.route('/:_id/history')
  .get(userCtrl.history_get);

router.route('/:_id/log')
  .get(userCtrl.log_get)
  .post(userCtrl.log_post);

router.route('/:_id/log/T')
  .get(userCtrl.log_T_get);

router.route('/:_id/log/E')
  .get(userCtrl.log_E_get);

router.route('/:_id/log/P')
  .get(userCtrl.log_P_get);

module.exports = router;