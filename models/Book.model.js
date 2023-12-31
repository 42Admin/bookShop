const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    name: String,
    author: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Author'
    },
    genre: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Genre'
    },
    review: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Review'
    }
})

const Book = mongoose.model('Book', bookSchema)
module.exports = Book