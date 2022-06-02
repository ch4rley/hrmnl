const siteData = require('../data/siteData');
const userData = require('../data/userData');
const User = require('../models/userModel');

//const SchemaName = require('../models/schemanameModel');

module.exports = {
    create_user: (req, res) => {
        const {name, pronouns, email, password} = req.body;
        const newUser = new User ({
            name: name,
            pronouns: pronouns,
            email: email,
            password: password
        });

        newUser.save();
        let _id = newUser._id;

        res.redirect('/login');

        // res.redirect('/user/' + _id + '/create-profile');
    },
    profile: (req, res) => {
        const {_id} = req.params;
        const {name, pronouns, hormone, hrtDeliveryE, hrtDoseE, hrtConcentrationE, hrtFrequencyE, hrtDeliveryT, hrtDoseT, hrtConcentrationT, hrtFrequencyT, hrtDeliveryP, hrtDoseP, hrtConcentrationP, hrtFrequencyP, email_newFeatures} = req.body;
        console.log(req.body);
        User.findOne({_id: _id}, (error,
            foundUser) => {
                if(error) {
                    return error;
                } else {
                    res.render('pages/profile', {
                        user: foundUser,
                        signedIn: siteData.signedIn
                    });
                }
        });

    },

    create_profile_get: (req, res) => {
        const {_id} = req.params;
        User.findOne({_id: _id}, (error, foundUser) => {
            if(error) {
                return error;
              } else {
                res.render('pages/create-profile', {
                    signedIn: siteData.signedIn,
                    user: foundUser
                });
            }
        })
    },

    create_profile_put: (req, res) => {
        // which user in the database
        const {_id} = req.params;
        const {name, pronouns, hormone, hrtDeliveryE, hrtDoseE, hrtConcentrationE, hrtFrequencyE, hrtDeliveryT, hrtDoseT, hrtConcentrationT, hrtFrequencyT, hrtDeliveryP, hrtDoseP, hrtConcentrationP, hrtFrequencyP, email_newFeatures} = req.body;
        console.log(req.body);

        // taking current inputs and relabelling them and updating the information in the database
        User.findByIdAndUpdate(_id, {$set: {
            name: name,
            pronouns: pronouns,
            hormone: hormone,
            hrtDeliveryE: hrtDeliveryE,
            hrtDoseE: hrtDoseE,
            hrtConcentrationE: hrtConcentrationE,
            hrtFrequencyE: hrtFrequencyE,
            hrtDeliveryT: hrtDeliveryT,
            hrtDoseT: hrtDoseT,
            hrtConcentrationT: hrtConcentrationT,
            hrtFrequencyT: hrtFrequencyT,
            hrtDeliveryP: hrtDeliveryP,
            hrtDoseP: hrtDoseP,
            hrtConcentrationP: hrtConcentrationP,
            hrtFrequencyP: hrtFrequencyP,
            // email_newFeatures: email_newFeatures
        }}, {new: true}, error => {
            if(error) {
              return error;
            } else {
                res.redirect('/user/' + _id + '/');
            }
        });
    },

    edit_profile_get: (req, res) => {
        const {_id} = req.params;
        User.findOne({_id: _id}, (error, foundUser) => {
            if(error) {
                return error;
              } else {
                res.render('pages/edit-profile', {
                    signedIn: siteData.signedIn,
                    user: foundUser
                });
            }
        })
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