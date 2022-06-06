const siteData = require('../data/siteData');
const userData = require('../data/userData');
const User = require('../models/userModel');
const Log = require('../models/logModel');
const { user } = require('../data/userData');

//const SchemaName = require('../models/schemanameModel');

module.exports = {
    create_user_post: (req, res) => {
        // if(req.isAuthenticated()){
        const {name, pronouns, username, password} = req.body;
        const newUser = new User ({
            name: name,
            pronouns: pronouns,
            username: username,
            password: password
        });

        newUser.save();
        let _id = newUser._id;
        console.log('maybe the new user was saved idk');
        console.log(_id);

        res.redirect('/login');

        // res.redirect('/user/' + _id + '/create-profile');
        // } else {
        // res.redirect('/login')
        // };
    },
    profile: (req, res) => {
        if(req.isAuthenticated()){
        const {_id} = req.params;
        const {name, pronouns, hormone, hrtDeliveryE, hrtDoseE, hrtConcentrationE, hrtFrequencyE, hrtDeliveryT, hrtDoseT, hrtConcentrationT, hrtFrequencyT, hrtDeliveryP, hrtDoseP, hrtConcentrationP, hrtFrequencyP} = req.body;
        console.log(req.body);
        User.findOne({_id: _id}, (error, foundUser) => {
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
                };
            }
        });
        } else {
            res.redirect('/login')
        }

    },

    create_profile_get: (req, res) => {
        if(req.isAuthenticated()){
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
        } else {
            res.redirect('/login')
        }
    },

    create_profile_put: (req, res) => {
        if(req.isAuthenticated()){
        // which user in the database
        const {_id} = req.params;
        const {name, pronouns, hormone, hrtDeliveryE, hrtDoseE, hrtConcentrationE, hrtFrequencyE, hrtDeliveryT, hrtDoseT, hrtConcentrationT, hrtFrequencyT, hrtDeliveryP, hrtDoseP, hrtConcentrationP, hrtFrequencyP} = req.body;
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
        }}, {new: true}, error => {
            if(error) {
              return error;
            } else {
                res.redirect('/user/' + _id + '/');
            }
        });
        } else {
            res.redirect('/login')
        }
    },

    edit_profile_get: (req, res) => {
        if(req.isAuthenticated()){
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
        } else {
            res.redirect('/login')
        }
    },

    edit_profile_update: (req, res) => {
        if(req.isAuthenticated()){
        const {_id} = req.params;
        const {name, pronouns, hormone, hrtDeliveryE, hrtDoseE, hrtConcentrationE, hrtFrequencyE, hrtDeliveryT, hrtDoseT, hrtConcentrationT, hrtFrequencyT, hrtDeliveryP, hrtDoseP, hrtConcentrationP, hrtFrequencyP} = req.body;

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
        } else {
            res.redirect('/login');
        }
    },
    // temporarily commented out until models are integrated with one another
    // history_get: (req, res) => {
    //     if(req.isAuthenticated()){
    //     const {_id} = req.params;
    //     User.findOne({_id: _id}, (error, foundUser) => {
    //         if(error) {
    //             return error;
    //         } else {
    //             foundUser.Log.find({}, (error, allLogs) => {
    //                 if(error) {
    //                     return error;
    //                 } else {
    //                     res.render('pages/history', {
    //                         signedIn: siteData.signedIn,
    //                         history: allLogs,
    //                         title: 'history'
    //                     });
    //                 }
    //             })
    //         }
    //     });
    //     } else {
    //         res.redirect('/login')
    //     }
    // },
    // temporary history handler function
    history_get: (req, res) => {
        if(req.isAuthenticated()){
            const {_id} = req.params;
            User.findById({_id: _id})
                .populate('logs')
                // userLogs is specific (current) user plus logs from populate method, ref'd in userModel 
                .exec((error, userLogs) => {
                    if(error) {
                        console.log('this is an error in the history_get handler')
                        return error;
                    } else {
                        res.render('pages/history', {
                            // everything from userModel except for logs
                            user: userLogs,
                            thisUser: userLogs,
                            // specifically the referenced logs
                            history: userLogs.logs,
                            title: 'history'
                        })
                    }
                    
                })


        // finds all logs
        // Log.find({}, (error, allLogs) => {
        //     if(error) {
        //         return error;
        //       } else {
        //         res.render('pages/history', {
        //             signedIn: siteData.signedIn,
        //             history: allLogs,
        //             title: 'history'
                    
        //         });
        //     }
        // })
        } else {
            res.redirect('/login')
        }
    },

    log_get: (req, res) => {
        if(req.isAuthenticated()){
        const {_id} = req.params;
        User.findOne({_id: _id}, (error, foundUser) => {
            if(error) {
                return error;
              } else {
                    if(foundUser.hormone.length === 1) {
                        res.render('pages/log', {
                            user: foundUser,
                            title: 'add instance'  
                        });
                    } else {
                        res.render('pages/log-hormones', {
                            user: foundUser,
                            title: 'select hormone'
                        });
                    }
            }
        });
        } else {
            res.redirect('/login')
        }
    },
    log_T_get: (req, res) => {
        if(req.isAuthenticated()){
            const{_id} = req.params;
            User.findOne({_id: _id}, (error, foundUser) => {
                if(error) {
                    console.log('there is an error afoot loading this here log page');
                    return error;
                } else {
                    res.render('pages/NAMEHERE', {
                        user: foundUser,
                        title: 'add instance'
                    });
                }
            })
        }
    },
    log_E_get: (req, res) => {
        if(req.isAuthenticated()){
            const{_id} = req.params;
            User.findOne({_id: _id}, (error, foundUser) => {
                if(error) {
                    console.log('there is an error afoot loading this here log page');
                    return error;
                } else {
                    res.render('pages/NAMEHERE', {
                        user: foundUser,
                        title: 'add instance'
                    });
                }
            })
        }
    },
    log_P_get: (req, res) => {
        if(req.isAuthenticated()){
            const{_id} = req.params;
            User.findOne({_id: _id}, (error, foundUser) => {
                if(error) {
                    console.log('there is an error afoot loading this here log page');
                    return error;
                } else {
                    res.render('pages/NAMEHERE', {
                        user: foundUser,
                        title: 'add instance'
                    });
                }
            })
        }
    },
    log_post: (req, res) => {
        if(req.isAuthenticated()){
        const {_id} = req.params;
        Log.create(req.body, (error, newLog) => {
            if(error) {
                console.log('error all up in the log_post');
                return error;
            } else {
                // who is the userr that should receive log?
                // enter log into log array
                User.findById({_id: _id})
                    // found user, and posts log into logs array for this user because of ref in userModel
                    // uses key from userSchema
                    .populate('logs')
                    // execute (instead of a callback function)
                    // 2 arguments: error and userEntry (user._id + newLog all bundled)
                    .exec((error, userEntry) => {
                        userEntry.logs.push(newLog);
                        userEntry.save((error) => {
                            if(error) {
                                console.log('inception error in log_post');
                                return error;
                            } else {
                                res.redirect('/user/' + _id + '/history');
                            };
                        });
                    });

            };
            
        });
        // OLD CODE FOR LOG_POST 
        //   const {hrtDate, hrtNotes, hrtHormone, hrtDelivery, hrtDose, hrtConcentration, hrtFrequency} = req.body;
  
        //   const newLog = new Log ({
        //     hrtDate: hrtDate,
        //     hrtNotes: hrtNotes,
        //     hrtHormone: hrtHormone,
        //     hrtDelivery: hrtDelivery,
        //     hrtDose: hrtDose,
        //     hrtConcentration: hrtConcentration,
        //     hrtFrequency: hrtFrequency,
        //   });
      
        //   newLog.save();
      
        //   res.redirect("/user/" + _id + "/history");
        } else {
            res.redirect('/login')
        }
    },
      
}