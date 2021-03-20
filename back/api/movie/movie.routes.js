const express = require('express')
const { addMovie, getMovies } = require('./movie.controller')
const router = express.Router()

router.get('/', getMovies)
router.post('/add', addMovie)

module.exports = router