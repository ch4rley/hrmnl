const siteData = require('../data/siteData');
const userData = require('../data/userData');
//const SchemaName = require('../models/schemanameModel');

module.exports = {
    profile: (req, res) => {
        res.render('pages/profile', {
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
        const {_id} = req.params;
        const {name, pronouns, hormone, hrtDeliveryE, hrtDoseE, hrtConcentrationE, hrtFrequencyE, hrtDeliveryT, hrtDoseT, hrtConcentrationT, hrtFrequencyT, hrtDeliveryP, hrtDoseP, hrtConcentrationP, hrtFrequencyP, email_newFeatures} = req.body;

        const matchUser = userData.find(user => user._id === String(_id));
        const index = userData.indexOf(matchUser);
        userData.splice(index, 1);
        res.redirect('/user/_id', {
            signedIn: siteData.signedIn,
            user: userData.user
        });
    },

    history_get: (req, res) => {
        res.render('pages/history', {
            signedIn: siteData.signedIn,
            user: userData.user
        });
    },
    log_get: (req, res) => {
        res.render('pages/log', {
            signedIn: siteData.signedIn,
            user: userData.user
        });
    },
}