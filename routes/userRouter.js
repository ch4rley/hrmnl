const express = require('express');
const userCtrl = require('../controllers/userCtrl');
const router = express.Router();

// stores all users in users collection in hrmnl database
router.route('/')
  .post(userCtrl.create_user_post);

router.route('/:_id')
  .get(userCtrl.profile)
  .put(userCtrl.create_profile_put)
  .put(userCtrl.edit_profile_update);

router.route('/:_id/edit-profile')
  .get(userCtrl.edit_profile_get)
  // .put(userCtrl.edit_profile_update);

router.route('/:_id/create-profile')
  .get(userCtrl.create_profile_get)

router.route('/:_id/history')
  // .get(userCtrl.history_get)
  //this actually posts the log information to the history page
  .post(userCtrl.history_post);

router.route('/:_id/log')
  .get(userCtrl.log_get);

router.route('/history')
  .get(userCtrl.history_get);

module.exports = router;