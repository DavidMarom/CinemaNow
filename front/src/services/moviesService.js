import { httpService } from './httpService'

function add(mov) {
    return httpService.post(`movie/add`, mov);
}

export const moviesService = {
    add
}