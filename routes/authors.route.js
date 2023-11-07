const { Router } = require("express")
const router = Router()
const { authorController } = require('../controller/authors.controller')

router.post('/addAuthor', authorController.addAuthor)
router.get('/author', authorController.getAuthor)

module.exports = router