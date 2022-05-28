// import express
const express = require('express');
// import morgan
const morgan = require('morgan');
// import path module
const path = require('path');
// import method override to allow update and delete methods on forms
const methodOverride = require('method-override');
// point to routes in index.js file
const routes = require('./routes/index');
// create new express app and save it as 'app'
const app = express();
// server configuration -- define port
const PORT = 3000;


// use path module to point Node.js to public directory
app.use(express.static(path.join(__dirname, 'public')));
// parse content encoded in the url
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// use method-override, key name (_method) tells module what to override
app.use(methodOverride('_method'));
// use morgan as middleware
app.use(morgan('dev'));
// tells app that routes exist and where to find them
app.use(routes);

// require('./config/connection');
// configure node.js to use ejs as views engine
app.set('view engine', 'ejs');

// make server listen to requests on specified PORT and give feedback
app.listen(PORT, () => {
    console.log(`the server is listening, respectfully, on port ${PORT}`);
});
