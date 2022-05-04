const siteData = require('../data/siteData');
//const SchemaName = require('../models/schemanameModel');

module.exports = {
  index: (request, response) => {
    response.render('pages/index', {
        name: siteData.userName,
        copyrightYear: siteData.year,
        signedIn: siteData.signedIn
    });
  }
}