var express = require('express');
var router = express.Router();

var homeController = require('../controllers/home_controller');
var profileController = require('../controllers/profile_controller');
var skillController = require('../controllers/skill_controller');
var portfolioController = require('../controllers/portfolio_controller');
var testimonialController = require('../controllers/testimonial_controller');
var serviceController = require('../controllers/service_controller');
var experienceController = require('../controllers/experience_controller');

/* GET home page. */
router.get('/', homeController.index);
router.get('/skills', skillController.index);
router.get('/about', profileController.index);
router.get('/portfolio', portfolioController.index);
router.get('/testimonial', testimonialController.index);
router.get('/contact', profileController.contact);
router.get('/services', serviceController.index);
router.get('/experiences', experienceController.index);

module.exports = router;
