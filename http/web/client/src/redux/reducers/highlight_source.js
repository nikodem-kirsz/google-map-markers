import {HIGHLIGHT_ENERGY_SOURCE} from '../action_types';
const initialState = {};

export default function (state = initialState, action) {
    switch(action.type) {
        case HIGHLIGHT_ENERGY_SOURCE: {
            return action.payload
        }
        default:
            return state;
    }
};