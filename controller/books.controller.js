const Book = require('../models/Book.model');

module.exports.bookController = {
    getAllBooks: (req, res) => {
        Book.find().populate('author genre')
            .then((data) => res.json(data))
            .catch((err) => res.json('Books not found'))
    },
    getNamedBooks: (req, res) => {
        Book.findById(req.params.id)
            .then((data) => res.json(data))
            .catch((err) => res.json('Book not found'))
    },
    getBooksByGenre: (req, res) => {
        Book.find(re.params.genre.name)
        .then((data) => res.json(data))
        .catch((err) => res.json('Genre not found'))
    },
    addBooks: (req, res) => {
        const {name, author, genre} = req.body
        Book.create( {
            name, 
            author, 
            genre
        })
        .then((data) => res.json(data))
    },
    deleteBook: (req, res) => {
        Book.findByIdAndDelete(req.params.id)
        .then(() => res.json('deleted'))
        .catch((err) => res.json('Error occured'))
    },
    patchBook: (req, res) => {
        Book.findByIdAndUpdate(req.params.id, {
            ...req.body
        })
        .then(() => res.json('Updated'))
    }

} 