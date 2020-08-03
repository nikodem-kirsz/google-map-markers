import {SHOWING_PROFILE} from '../action_types';
const initialState = false;

export default function (state = initialState, action) {
    switch(action.type) {
        case SHOWING_PROFILE: {
            return action.payload
        }
        default:
            return state;
    }
};