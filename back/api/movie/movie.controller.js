const movieService = require('./movie.service')
const api_key='fbee9c6188286a5d20cf549e6bbeea4e';

// getMovie, addMovie, deleteMovie, updateMovie

async function getMovie(req, res) {
    const movie = await movieService.getByQuery(req.params.query)
    res.send(movie)
}

// async function getAllAnnouncements(req, res) {
//     const announcements = await announcementService.query3();
//     res.send(announcements);
// }

// async function countAnnouncements(req, res) {
//     const count = await announcementService.count()
//     res.send(count);
// }

// async function getAllAnnouncements_page(req, res) {
//     const queryPage = req.query.page;
//     const pageSize = 4;
//     const announcements = await announcementService.query2(queryPage, pageSize);
//     res.send(announcements)
// }

async function deleteMovie(req, res) {
    await movieService.remove(req.params.id)
    res.end()
}

async function addMovie(req, res) {
    const movie = req.body;
    await movieService.add(movie)
    res.send(movie)
}

// async function updateAnnouncement2(req, res) {
//     const announcements = req.body;
//     await announcementService.update2(announcements)
//     res.send(announcements)
// }

module.exports = {
    getMovie,
    addMovie,
    deleteMovie
}