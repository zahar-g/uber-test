import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function settingsReducer(state = initialState.settings, action) {
    switch (action.type) {
        case types.LOAD_SETTINGS_SUCCESS:
            return action.settings;

        default:
            return state;
    }
}
