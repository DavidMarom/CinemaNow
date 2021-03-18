const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

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
}

// async function query(filterBy) {
//     let criteria = {};
//     if (filterBy != 'undefined' || filterBy != '') { criteria = { name: new RegExp(".*" + filterBy + ".*", 'i') } }
//     else { criteria = '' }
//     const collection = await dbService.getCollection('user');
//     try {
//         if (filterBy != undefined || filterBy != '') { var users = await collection.find(criteria).toArray(); }
//         else { var users = await collection.find().toArray(); }
//         users.forEach(user => delete user.password);

//         return users;
//     }

//     catch (err) {
//         console.log('ERROR: cannot find users')
//         throw err;
//     }
// }

// async function query2(queryPage, pageSize) {
//     const collection = await dbService.getCollection('user');
//     try {
//         var users = await collection.find().skip((queryPage - 1) * pageSize).limit(pageSize).toArray();
//         users.forEach(user => delete user.password);

//         return users;
//     }
//     catch (err) {
//         console.log('ERROR: cannot find users')
//         throw err;
//     }
// }

// async function query3() {
//     const collection = await dbService.getCollection('announcements');
//     try {
//         var ann = await collection.find().toArray();
//         return ann;
//     }
//     catch (err) {
//         console.log('ERROR: cannot find announcements')
//         throw err;
//     }
// }

// async function count() {
//     const collection = await dbService.getCollection('user');
//     try {
//         var number = await collection.aggregate([{ $count: "total" }]).toArray();
//         return number;
//     }
//     catch (err) {
//         console.log('ERROR: cannot count users')
//         throw err;
//     }
// }

// async function getByQuery(movieQuery) {

async function getByQuery(query) {

    return ajax(`http://api.themoviedb.org/3/search/keyword?api_key=fbee9c6188286a5d20cf549e6bbeea4e&query=${query}&page=1`, 'GET', null)

}

// async function getByEmail(email) {
//     const collection = await dbService.getCollection('user')
//     try {
//         const user = await collection.findOne({ email })
//         return user
//     } catch (err) {
//         console.log(`ERROR: while finding user ${email}`)
//         throw err;
//     }
// }

// async function remove(userId) {
//     const collection = await dbService.getCollection('user')
//     try {
//         await collection.deleteOne({ "_id": ObjectId(userId) })
//     } catch (err) {
//         console.log(`ERROR: cannot remove user ${userId}`)
//         throw err;
//     }
// }

// async function update(user) {
//     const collection = await dbService.getCollection('user')
//     user._id = ObjectId(user._id);

//     try {
//         await collection.replaceOne({ "_id": user._id }, user)
//         return user
//     } catch (err) {
//         console.log(`ERROR: cannot update user ${user._id}`)
//         throw err;
//     }
// }

// async function update2(user) {
//     const collection = await dbService.getCollection('user')
//     user._id = ObjectId(user._id);

//     try {
//         await collection.updateOne({ _id: user._id }, { $set: user })
//         return user
//     } catch (err) {
//         console.log(`ERROR: cannot update user ${user._id}`)
//         throw err;
//     }
// }





async function add(ann) {
    const collection = await dbService.getCollection('movies')
    try {
        await collection.insertOne(ann);
        return ann;
    } catch (err) {
        console.log(`ERROR: cannot insert user`)
        throw err;
    }
}


async function remove(annId) {
    const collection = await dbService.getCollection('announcements')
    try {
        await collection.deleteOne({ "_id": ObjectId(annId) })
    } catch (err) {
        console.log(`ERROR: cannot remove announcement ${annId}`)
        throw err;
    }
}


// function _buildCriteria(filterBy) {
//     const criteria = {};
//     if (filterBy.txt) {
//         criteria.name = filterBy.txt
//     }
//     if (filterBy.minBalance) {
//         criteria.balance = { $gte: +filterBy.minBalance }
//     }
//     return criteria;
// }


