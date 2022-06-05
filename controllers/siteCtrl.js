const siteData = require('../data/siteData');
const { user } = require('../data/userData');
const userData = require('../data/userData');
//const SchemaName = require('../models/schemanameModel');
const User = require('../models/userModel');


module.exports = {
    // handler that will show index page
    index: (req, res) => {
    res.render('pages/index', {
        name: siteData.userName,
        copyrightYear: siteData.year,
        signedIn: siteData.signedIn,
        title: 'home'
        });
    },
    // handler that will show login page
    login: (req, res) => {
        res.render('pages/log-in', {
            signedIn: siteData.signedIn,
            title: 'log in'
        });
    },
    // handler function for login redirect
    login_post: (req, res) => {
        res.redirect('/user/' + _id + '/', {
            title: 'log in'
        });
    },
    // handler function for register route
    register: (req, res) => {
        res.render('pages/sign-up', {
        signedIn: siteData.signedIn,
        title: 'register'
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
      res.redirect('/user/' + _id + '/');
    }
    ]
}