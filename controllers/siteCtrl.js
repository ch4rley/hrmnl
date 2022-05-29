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
        res.render('/pages/login', {
            signedIn: siteData.signedIn
        });
    },
    
    profile: (req, res) => {
        res.render('pages/edit-profile', {
            signedIn: siteData.signedIn,
            user: userData.user
        });
    },

    create_profile_get: (req, res) => {
        res.render('pages/create-profile', {
            signedIn: siteData.signedIn,
            user: userData.user
        });
    },

    create_profile_post: (req, res) => {
        res.redirect('pages/profile', {
            signedIn: siteData.signedIn,
            user: userData.user
        });
    },

    edit_profile_get: (req, res) => {
        res.render('pages/edit-profile', {
            signedIn: siteData.signedIn,
            user: userData.user
        });
    },

    edit_profile_update: (req, res) => {
        res.redirect('pages/profile', {
            signedIn: siteData.signedIn,
            user: userData.user
        });
    },




}