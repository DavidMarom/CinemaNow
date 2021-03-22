const movieService = require('./tmdb.service')

async function getMovie(req, res) {
    const movie = await movieService.getByQuery(req.params.query)
    res.send(movie)
}

// async function deleteMovie(req, res) {
//     await movieService.remove(req.params.id)
//     res.end()
// }

// async function addMovie(req, res) {
//     const movie = req.body;
//     await movieService.add(movie)
//     res.send(movie)
// }

// async function updateMovie(req, res) {
//     const movie = req.body;
//     await movieService.update(movie)
//     res.send(movie)
// }

module.exports = {
    getMovie
    // addMovie,
    // deleteMovie,
    // updateMovie
}