const movieService = require('./movie.service')


async function addMovie(req, res) {
    const movie = req.body;
    await movieService.addMovie(movie)
    res.send(movie)
}

async function getMovies(req, res) {
    const movies = await movieService.query(req.query)
    res.send(movies)
}


module.exports = {
    addMovie,
    getMovies
}