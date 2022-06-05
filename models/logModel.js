const mongoose = require('mongoose');
// allows for connecting the logs to the user
const User = require('../models/userModel');
const {Schema} = mongoose;
const userSchema = User;

const logSchema = new Schema({
  // postedBy: {
  //   type: {type: mongoose.Schema.Types.String, ref: 'User'},
  // },
  hrtDate: {
    type: String,
  },
  hrtHormone: {
    type: String,
  },
  hrtDelivery: {
    type: String,
  },
  hrtDose: {
    type: String,
  },
  hrtConcentration: {
    type: String,
  },
  hrtFrequency: {
    type: String,
  },
  hrtNotes: {
    type: String
  } 
}, 
{timestamps: true},
{ typeKey: '$type' });


const Log = mongoose.model('Log', logSchema);

module.exports = Log;