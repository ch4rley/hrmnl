// import express
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const methodOverride = require('method-override');
const routes = require('./routes/index');
// create new express app and save it as 'app'
const app = express();
// server configuration
const PORT = 3000;

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(morgan('dev'));
app.use(routes);

// require('./config/connection');

// make server listen to requests on specified PORT and give feedback
app.listen(PORT, () => {
    console.log(`the server is listening, respectfully, on port ${PORT}`);
});
