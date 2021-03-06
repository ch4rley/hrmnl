const mongoose = require('mongoose');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const {Schema} = mongoose;
// let GoogleStrategy = require('passport-google-oauth20').Strategy;
// const findOrCreate = require('mongoose-findorcreate');

const userSchema = new Schema({
  name: {
    type: String,
    required:  [false, 'name is required'],
    minlength: [1,'minimum length is one character']
  },
  pronouns: {
    type: String,
    maxlength: [70, 'please express your pronouns in fewer than 70 characters'],
    required: false,
  },
 username: {
    type: String,
    // makes sure this is not a duplicate email address
    // unique: true,
    required: [true, 'email is required'],
    minlength: [7, 'too short, must be a valid email address'],
    maxlength: [40, 'too long, must be a valid email address. if your email address exceeds 40 characters, please contact the admin']
  },
  password: {
    type: String,
    required: [false, 'password is required'],
    minlength: [7, 'password must contain at least 7 characters'],
    maxlength: [320, 'too long, surely you can think of a secure password that is fewer than 320 characters']
  },
  // googleId: {
  //   type: String,
  // },
// create profile
  hormone: {
    type: Array,
  },
  // testosterone details
  hrtDeliveryT: {
    type: String,
  },
  hrtDoseT: {
    type: String,
  },
  hrtConcentrationT: {
    type: String,
  },
  hrtFrequencyT: {
    type: String,
  },
  // estrogen details
  hrtDeliveryE: {
    type: String,
  },
  hrtDoseE: {
    type: String,
  },
  hrtConcentrationE: {
    type: String,
  },
  hrtFrequencyE: {
    type: String,
  },
  // progesterone details
  hrtDeliveryP: {
    type: String,
  },
  hrtDoseP: {
    type: String,
  },
  hrtConcentrationP: {
    type: String,
  },
  hrtFrequencyP: {
    type: String,
  },
  logs: [{
    // ObjectId of each log document is stored here
    type: Schema.Types.ObjectId,
    // referring to Log Schema within logModel
    // log form creates it's own document for each log, which is referenced below
    ref: "Log"
  }]
  // email opt-in
  // email_newFeatures: {
  //   type: Boolean,
  // }
}, 
  {
  timestamps: true
  });


userSchema.plugin(passportLocalMongoose);
// userSchema.plugin(findOrCreate);

const User = mongoose.model('User', userSchema);

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// passport.serializeUser(function(user, cb) {
//   process.nextTick(function() {
//     cb(null, { id: user.id, username: user.username, name: user.displayName });
//   });
// });

// passport.deserializeUser(function(user, cb) {
//   process.nextTick(function() {
//     return cb(null, user);
//   });
// });

// passport.use(new GoogleStrategy({
//   clientID: process.env.CLIENT_ID,
//   clientSecret: process.env.CLIENT_SECRET,
//   callbackURL: "https://hrmnl.herokuapp.com/auth/google/home",
// },
// function(accessToken, refreshToken, email, cb) {
//   console.log(email);
//   User.findOrCreate({ googleId: email.id, username: email.displayName}, function (err, user) {
//     return cb(err, user);
//   });
// }
// ));

module.exports = User;
