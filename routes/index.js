var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index.hbs', {
    userName: 'Brad',
    pageTitle: 'Home',
    welcomeMessage: 'Welcome to my website!',
  })
});

/* GET home page. */
router.get('/about', function (req, res, next) {
  res.render('about.hbs', {
    userName: 'Brad',
    pageTitle: 'About',
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
