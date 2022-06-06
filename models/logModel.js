const mongoose = require('mongoose');
const {Schema} = mongoose;

const logSchema = new Schema({
  hrtDate: {
    type: String,
  },
  hrtNotes: {
    type: String
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
}, 
{timestamps: true},
{ typeKey: '$type' });


const Log = mongoose.model('Log', logSchema);

module.exports = Log;