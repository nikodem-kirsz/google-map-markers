import {ADD_ENERGY_SOURCE, LOAD_ENERGY_SOURCES, SHOW_ENERGY_SOURCES} from '../action_types';
const initialState = [];

export default function (state = initialState, action) {
    switch(action.type) {
        case ADD_ENERGY_SOURCE: {
            return [...state, action.payload];
        }

        case LOAD_ENERGY_SOURCES: {
            return [...action.payload]
        }
        default:
            return state;
    }
};