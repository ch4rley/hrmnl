const siteData = require('../data/siteData');
const userData = require('../data/userData');
//const SchemaName = require('../models/schemanameModel');

module.exports = {
    // handler that will show index page
    index: (req, res) => {
    res.render('pages/index', {
        name: siteData.userName,
        copyrightYear: siteData.year,
        signedIn: siteData.signedIn
        });
    },
    // handler that will show login page
    login: (req, res) => {
        res.render('pages/log-in', {
            signedIn: siteData.signedIn
        });
    },

    login_post: (req, res) => {
        res.redirect('/user/' + _id + '/');
    },

    register: (req, res) => {
        res.render('pages/sign-up', {
        signedIn: siteData.signedIn
        });
    },
}