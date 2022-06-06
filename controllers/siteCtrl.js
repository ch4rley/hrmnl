const siteData = require('../data/siteData');
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
            password: password,
        });

        req.login(user, (error) => {
            if (error) {
                console.log('fucking login_post');
                return error;
                // res.redirect('/login');
            } else {
                User.findOne({username: username}, (error, foundUser) => {
                    if(error) {
                        console.log('yeah this did not work login_post findOne');
                        return error;
                    } else {
                        let _id = foundUser._id;
                        passport.authenticate('local')(req, res, () => {
                            res.redirect('/user/' + _id + '/');
                        });
                    }
                })
                
            }
        });
    },
    // handler function for register route
    register: (req, res) => {
        res.render('pages/sign-up', {
            title: 'register'
        });
    },
    register_post: (req, res) => {
        const {name, pronouns, username, password} = req.body;
        User.register({username: username, name: name, pronouns: pronouns}, password, (error, user) => {
            if (error) {
                console.log(error);
                console.log('fuuuuuuuuck register_post')
                res.redirect('/register');
            } else {
                console.log('ok but will it fail at authentication');
                passport.authenticate('local')(req, res, () => {
                    console.log('this is authentication');
                    res.redirect('/login');
                });
            };
        }); 
    },
    // handler for logout route
    logout:(req, res) => {
        req.logout(function(err) {
            if (err) { return next(err); }
            res.redirect('/');
          });
    }
    // handlers for google oauth
    // google_get: passport.authenticate('google', {scope: ['openid', 'profile', 'email']}),
    // google_redirect_get: [
    // passport.authenticate('google', {failureRedirect: '/login'}),
    // function(req, res) {
    //   res.redirect('/');
    // }
    // ]
}