var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index.hbs', {
        userName: 'Brad',
        pageTitle: 'Home',
        welcomeMessage: 'Welcome to my node + express website!',
    })
});

/* GET home page. */
router.get('/about', function (req, res, next) {
    res.render('about.hbs', {
        userName: 'Brad',
        pageTitle: 'About',
        bodyText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    })
});

/* GET home page. */
router.get('/contact', function (req, res, next) {
    res.render('contact.hbs', {
        userName: 'Brad',
        pageTitle: 'Contact',
    })
});

module.exports = router;
