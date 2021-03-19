const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    addMovie,query
}

async function query() {
    const collection = await dbService.getCollection('movies');
    try {
        console.log('movies service');
        var movies = await collection.find().toArray();
        return movies;
    }
    catch (err) {
        console.log('ERROR: cannot find movies')
        throw err;
    }
}



async function addMovie(movie) {
    const collection = await dbService.getCollection('movies')
    try {
        await collection.insertOne(movie);
        return movie;
    } catch (err) {
        console.log(`ERROR: cannot insert movie`)
        throw err;
    }
}