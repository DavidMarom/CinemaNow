const express = require('express')
const { addShow, getShows, deleteShow } = require('./show.controller')
const router = express.Router()

router.get('/', getShows)
router.post('/add', addShow)
router.delete('/:id', deleteShow)

module.exports = router