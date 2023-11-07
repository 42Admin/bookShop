const Review = require("../models/Review.model");

module.exports.reviewController = {
    addReview: (req, res) => {
        const {author, text, book} = req.body
        Review.create( {
            author,
            text,
            book
        })
        .then((data) => res.json(data))
    },
    getReview: (req, res) => {
        Review.find({}).populate('book')
        .then((data) => res.json(data))
        .catch((err) => res.json('Book not found or has no reviews'))
        }
}