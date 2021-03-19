import httpService from './httpService'

function add() {
    return httpService.get(`movie/`);
}


export const settingsService = {
    add
}