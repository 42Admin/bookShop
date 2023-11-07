const { Router } = require("express");
const { genreController } = require("../controller/genres.controller");
const router = Router();

router.get('/genres', genreController.getAllGenres)
router.post('/genres', genreController.addGenre)
router.delete('/genres', genreController.deleteGenre)

module.exports = router