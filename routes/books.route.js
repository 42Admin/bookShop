const { Router } = require("express")
const router = Router()
const { bookController } = require('../controller/books.controller')

router.post('/book', bookController.addBooks)
router.get('/book', bookController.getAllBooks)
router.get('/book/byGenre', bookController.getBooksByGenre)
router.get('/book/name', bookController.getNamedBooks)
router.delete('/book/:id', bookController.deleteBook)
router.patch('/book/:id', bookController.patchBook)


module.exports = router