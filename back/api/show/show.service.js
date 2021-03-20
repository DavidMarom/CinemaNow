const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    addShow,query,remove
}

async function query() {
    const collection = await dbService.getCollection('shows');
    try {
        var shows = await collection.find().toArray();
        return shows;
    }
    catch (err) {
        console.log('ERROR: cannot find shows')
        throw err;
    }
}

async function addShow(show) {
    const collection = await dbService.getCollection('shows')
    try {
        await collection.insertOne(show);
        return show;
    } catch (err) {
        console.log(`ERROR: cannot insert show`)
        throw err;
    }
}

async function remove(showId) {
    const collection = await dbService.getCollection('shows')
    try {
        await collection.deleteOne({ "_id": ObjectId(showId) })
    } catch (err) {
        console.log(`ERROR: cannot remove movie ${showId}`)
        throw err;
    }
}