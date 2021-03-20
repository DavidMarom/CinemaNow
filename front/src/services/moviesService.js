import { httpService } from './httpService'

async function add(mov) {
    try {
        const res = await httpService.post(`movie/add`, mov);
        return res;
    } catch (err) {
        console.log(err);

    }
}

async function getAllMovies() {
    try {
        const res = await httpService.get(`movies/`);
        return res;
    } catch (err) {
        console.log(err);
    }
}

async function removeMovie(movId) {
    try {
        const res = await httpService.delete(`movies/${movId}`)
        return res;
    } catch (err) {
        console.log(err);
    }
    
}


export const moviesService = {
    add,
    getAllMovies,
    removeMovie
}