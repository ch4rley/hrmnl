const mongoose = require('mongoose');
// const passport = require('passport');
// const passportLocalMongoose = require('passport-local-mongoose');
const {Schema} = mongoose;
// let GoogleStrategy = require('passport-google-oauth20').Strategy;
// const findOrCreate = require('mongoose-findorcreate');

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'name is required'],
    minlength:[1,'minimum length is one character']
  },
  
  pronouns: {
    type: String,
    required: false,
  },

  email: {
    type: String,
    // makes sure this is not a duplicate email address
    // unique: true,
    required: [true, 'email is required'],
    minlength: [7, 'too short, must be a valid email address'],
    maxlength: [30, 'too long, must be a valid email address']
  },

  password: {
    type: String,
    required: [true, 'password is required'],
    minlength: [7, 'password must contain at least 7 characters']
  },

  googleId: {
    type: String,
  },

// create profile
  hormone: {
    type: Array,
    // {
    //   delivery: String,
    //   dose: String,
    //   concentration: String,
    //   frequency: String,
    // }
  },

  hrt: {
      delivery: String,
      dose: String,
      concentration: String,
      frequency: String,
  }

  // hrt: {
  //   detailsT: {
  //     delivery: String,
  //     dose: String,
  //     concentration: String,
  //     frequency: String,
  //   },
  //   detailsE: {
  //     delivery: String,
  //     dose: String,
  //     concentration: String,
  //     frequency: String,
  //   },
  //   detailsP: {
  //     delivery: String,
  //     dose: String,
  //     concentration: String,
  //     frequency: String,
  //   }, 
  // },
}, 
  {
  timestamps: true
  });


// userSchema.plugin(passportLocalMongoose);
// userSchema.plugin(findOrCreate);

const User = mongoose.model('User', userSchema);

// passport.use(User.createStrategy());

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
//   callbackURL: "https://carols-book-realm.herokuapp.com/auth/google/admin",
// },
// function(accessToken, refreshToken, email, cb) {
//   console.log(email);
//   User.findOrCreate({ googleId: email.id, username: email.displayName}, function (err, user) {
//     return cb(err, user);
//   });
// }
// ));

module.exports = User;
