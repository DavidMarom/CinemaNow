import { showsService } from '../../services/showsService';

export function loadShow() {
    console.log('action: get all shows');
    return async dispatch => {
        try {
            const allShow = await showsService.getAllShows();
            dispatch({ type: 'LOAD_SHOW', allShow });
        } catch (err) {
            console.log('SettingsActions: err in getAllShows', err);
        }
    };
}

export function addShow(show) {
    return async dispatch => {
        try {
            const _show = await showsService.addShow(show);
            dispatch({ type: 'ADD_SHOW', _show })
        } catch (err) {
            console.log('SettingsActions: err in addShow', err);
        }
    }
}

export function removeShow(showId) {
    return async dispatch => {
        try {
            await showsService.removeShow(showId);
            dispatch({ type: 'REMOVE_SHOW', showId });
        } catch (err) {
            console.log('AnnActions: err in removeShow', err);
        }
    };
}

export function updateShow(show) {
    return async dispatch => {
        const _show = await showsService.update(show);
        dispatch({ type: 'UPDATE_SHOW', _show })
    };
}
