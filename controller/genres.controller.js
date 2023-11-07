const Genre = require('../models/Genre.model')

module.exports.genreController = {
    getAllGenres: (req, res) => {
        Genre.find()
        .then((data) => res.json(data))
        .catch((err) => res.json('Genre not found'))
    },
    addGenre: (req, res) => {
        Genre.create( {
            name: req.body.name
        }).then((data) => res.json(data))
    },
    deleteGenre: (req, res) => {
        Genre.findByIdAndDelete(req.params.id)
        .then(() => res.json('Genre deleted'))
      .catch((err) => res.json('error'))
    }
}