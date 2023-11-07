const {Router} = require('express')
const router = Router()
const {reviewController} = require('../controller/reviews.controller')

router.get('/review', reviewController.getReview)
router.post('/addReview', reviewController.addReview)

module.exports = router