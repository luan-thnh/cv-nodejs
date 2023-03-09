const Portfolio = require('../models/portfolio');
const Testimonial = require('../models/testimonial');

async function index(req, res, next) {
  const portfolios = await Portfolio.find({});
  const testimonials = await Testimonial.find({});

  res.render('index', {
    title: 'Super Folio',
    page: req.url,
    portfolios,
    testimonials,
  });
}

module.exports = { index };
