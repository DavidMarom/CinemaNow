const dbService = require('../../services/db.service')

const Axios = require('axios');
var axios = Axios.create({ withCredentials: true });

async function ajax(endpoint, method = 'get', data = null) {
    try {
        const res = await axios({
            url: `${endpoint}`,
            method,
            data
        })
        return res.data;
    } catch (err) {
        console.log(`Had Issues ${method}ing to the backend, endpoint: ${endpoint}, with data: ${data}`);
        console.dir(err);
        if (err.response && err.response.status === 401) {
            window.location.assign('/#/login');
        }
        throw err;
    }
}

module.exports = {
    getByQuery
    // add,
    // remove
}

async function getByQuery(query) {
    try {
        return ajax(`http://api.themoviedb.org/3/search/keyword?api_key=fbee9c6188286a5d20cf549e6bbeea4e&query=${query}&page=1`, 'GET', null)
    } catch {
        console.log(`Cant get movies from TMDB`);
        throw err;
    }
}

// async function add(movie) {
//     const collection = await dbService.getCollection('movies')
//     try {
//         await collection.insertOne(movie);
//         return movie;
//     } catch (err) {
//         console.log(`ERROR: cannot insert movie`);
//         throw err;
//     }
// }

// async function remove(movieId) {
//     const collection = await dbService.getCollection('movie')
//     try {
//         await collection.deleteOne({ "_id": ObjectId(movieId) })
//     } catch (err) {
//         console.log(`ERROR: cannot remove movie ${movieId}`)
//         throw err;
//     }
// }