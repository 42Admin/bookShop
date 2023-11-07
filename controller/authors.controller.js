const Author = require('../models/Author.model')

module.exports.authorController = {
    getAuthor: (req,res) => {
        Author.find({})
        .then((data) => res.json(data))
        .catch((error) => res.json(error.messange))
    },

    addAuthor: (req,res) => {
        const {name, info} = req.body
        Author.create({
            name: req.body.name,
            info: req.body.info
        })
        .then((data) => res.json(data))
    }
}