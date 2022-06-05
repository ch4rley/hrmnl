const siteData = require('../data/siteData');
// const userData = require('../data/userData');
const User = require('../models/userModel');
const Log = require('../models/logModel');

//const SchemaName = require('../models/schemanameModel');

module.exports = {
    create_user_post: (req, res) => {
        const {name, pronouns, email, password} = req.body;
        const newUser = new User ({
            name: name,
            pronouns: pronouns,
            email: email,
            password: password
        });

        newUser.save();
        let _id = newUser._id;

        // commented out until authentication is done
        // res.redirect('/login', { title: 'welcome', data: newUser });
        // temporarily redirecting to create-profile
        res.redirect('/user/' + _id + '/create-profile');
    },
    profile: (req, res) => {
        const {_id} = req.params;
        const {name, pronouns, hormone, hrtDeliveryE, hrtDoseE, hrtConcentrationE, hrtFrequencyE, hrtDeliveryT, hrtDoseT, hrtConcentrationT, hrtFrequencyT, hrtDeliveryP, hrtDoseP, hrtConcentrationP, hrtFrequencyP} = req.body;
        console.log(req.body + 'SUCCESS');
        User.findOne({_id: _id}, (error,
            foundUser) => {
                if(error) {
                    return error;
                } else {
                    // conditional to add user's name to page title?
                    // consider removing for safety reasons
                    // needs to wrap res.render for scope reasons
                    if (foundUser.name === '') {
                        let pageTitle = 'profile';
                    } else {
                        let thisUser = foundUser.name;
                        let pageTitle = thisUser + '\'s profile';
                    
                    res.render('pages/profile', {
                        user: foundUser,
                        signedIn: siteData.signedIn,
                        title: pageTitle
                    });
                    }
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
                    user: foundUser,
                    title: 'create profile'
                });
            }
        });
    },

    create_profile_put: (req, res) => {
        // which user in the database
        const {_id} = req.params;
        const {name, pronouns, hormone, hrtDeliveryE, hrtDoseE, hrtConcentrationE, hrtFrequencyE, hrtDeliveryT, hrtDoseT, hrtConcentrationT, hrtFrequencyT, hrtDeliveryP, hrtDoseP, hrtConcentrationP, hrtFrequencyP} = req.body;
        console.log(req.body + 'MUCH SUCCESS');

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
                    user: foundUser,
                    title: 'edit profile'
                    
                });
            }
        })
    },

    edit_profile_update: (req, res) => {
        const {_id} = req.params;
        const {name, pronouns, hormone, hrtDeliveryE, hrtDoseE, hrtConcentrationE, hrtFrequencyE, hrtDeliveryT, hrtDoseT, hrtConcentrationT, hrtFrequencyT, hrtDeliveryP, hrtDoseP, hrtConcentrationP, hrtFrequencyP} = req.body;
        console.log(req.body + 'it works!');

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
        }}, {new: true}, error => {
            if(error) {
              return error;
            } else {
                res.redirect('/user/' + _id + '/');
            }
        });
    },

    history_get: (req, res) => {
        const {_id} = req.params;
        User.findOne({_id: _id}, (error, foundUser) => {
            if(error) {
                return error;
            } else {
                foundUser.Log.find({}, (error, allLogs) => {
                    if(error) {
                        return error;
                    } else {
                        res.render('pages/history', {
                            signedIn: siteData.signedIn,
                            history: allLogs,
                            title: 'history'
                        });
                    }
                })
            }
        });
    },
    log_get: (req, res) => {
        const {_id} = req.params;
        User.findOne({_id: _id}, (error, foundUser) => {
            if(error) {
                return error;
              } else {
                res.render('pages/log', {
                    signedIn: siteData.signedIn,
                    user: foundUser,
                    title: 'add instance'
                    
                });
            }
        });
    },
    history_post: (req, res) => {
        const {_id} = req.params;
          const {hrtDate, hrtNotes, hrtHormone, hrtDelivery, hrtDose, hrtConcentration, hrtFrequency} = req.body;
  
          const newLog = new Log ({
            hrtDate: hrtDate,
            hrtNotes: hrtNotes,
            hrtHormone: hrtHormone,
            hrtDelivery: hrtDelivery,
            hrtDose: hrtDose,
            hrtConcentration: hrtConcentration,
            hrtFrequency: hrtFrequency,
          });
      
          newLog.save();
      
        // res.redirect("/user/" + _id + "/history"); 
        res.redirect("/user/history");
      },
}