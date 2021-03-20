const showService = require('./show.service')

async function addShow(req, res) {
    const show = req.body;
    await showService.addShow(show)
    res.send(show)
}

async function getShows(req, res) {
    const show = await showService.query(req.query)
    res.send(show)
}

async function deleteShow(req, res) {
    const show = await showService.remove(req.params.id)
    res.send(show)
}


module.exports = {
    addShow,
    getShows,
    deleteShow
}