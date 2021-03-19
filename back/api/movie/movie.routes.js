const express = require('express')
const { addMovie, getMovies } = require('./movie.controller')
const router = express.Router()

router.get('/', getMovies)
// router.put('/update', updateMovie)
router.put('/add', addMovie)
// router.delete('/:id', deleteMovie)

module.exports = router