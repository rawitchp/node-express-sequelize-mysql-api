const reviewController = require('../controllers/reviewController.js');

const router = require('express').Router();

router.post('/addReview', reviewController.addReview);

router.get('/allReviews', reviewController.getAllReviews);

module.exports = router;
