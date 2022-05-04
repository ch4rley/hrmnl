const siteData = require('../data/siteData');
//const SchemaName = require('../models/schemanameModel');

module.exports = {
    // handler that will show index page
    index: (request, response) => {
    response.render('pages/index', {
        name: siteData.userName,
        copyrightYear: siteData.year,
        signedIn: siteData.signedIn
        });
    },
    // handler that will show login page
    login: (request, response) => {
        response.render('pages/login');
    }, 

}