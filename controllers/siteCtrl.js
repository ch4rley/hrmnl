const siteData = require('../data/siteData');
// const { user } = require('../data/userData');
// const userData = require('../data/userData');
//const SchemaName = require('../models/schemanameModel');
const User = require('../models/userModel');
const passport = require('passport');


module.exports = {
    // handler that will show index page
    index: (req, res) => {
    res.render('pages/index', {
        // name: siteData.userName,
        copyrightYear: siteData.year,
        signedIn: siteData.signedIn,
        title: 'home'
        });
    },
    // handler that will show login page
    login: (req, res) => {
        res.render('pages/log-in', {
            title: 'log in'
        });
    },
    // handler function for login + redirect
    login_post: (req, res) => {
        const {username, password} = req.body;
        const user = new User({
            username: username,
            password: password
        });

        req.login(user, (error) => {
            if (error) {
                console.log(error)
                response.redirect('/login');
            } else {
                passport.authenticate('local')(req, res, () => {
                    response.redirect('/user/' + user._id + '/');
                });
            }
        });
    },
    // handler function for register route
    register: (req, res) => {
        const {username, password} = req.body;
        User.register({username: username}, password, (error, user) => {
            if (error) {
                console.log(error);
                res.redirect('/register');
            } else {
                passport.authenticate('local')(req, res, () => {
                res.redirect('/login');
                });
            };
        }); 
    },
    register_post: (req, res) => {
        const {email, password} = request.body;
        User.register({username: username}, password, (error, user) => {
            if (error) {
                console.log(error);
                response.redirect('/register');
            } else {
                passport.authenticate('local')(request, response, () => {
                    response.redirect('/login');
                });
            };
        }); 
    },
    // handler for logout route
    logout: (req, res) => {
        req.logout();
        res.redirect('/');
    },
    // handlers for google oauth
    google_get: passport.authenticate('google', {scope: ['openid', 'profile', 'email']}),
    google_redirect_get: [
    passport.authenticate('google', {failureRedirect: '/login'}),
    function(req, res) {
      res.redirect('/');
    }
    ]
}