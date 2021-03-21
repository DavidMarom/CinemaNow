import { httpService } from './httpService'

async function addShow(show) {
    try {
        const res = await httpService.post(`show/add`, show);
        return res;
    } catch (err) {
        console.log(err);
    }
}

async function getAllShows() {
    try {
        const res = await httpService.get(`show/`);
        return res;
    } catch (err) {
        console.log(err);
    }
}

async function removeShow(showId) {
    try {
        const res = await httpService.delete(`show/${showId}`)
        return res;
    } catch (err) {
        console.log(err);
    }
    
}

function update(show) {
    return httpService.put(`show/update`, show)
}

export const showsService = {
    addShow,
    getAllShows,
    removeShow,
    update
}