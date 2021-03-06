import {
    ADD_ENERGY_SOURCE,
    LOAD_ENERGY_SOURCES,
    SET_POWER,
    SET_PRICE_FILTER,
    SET_SOURCE_TYPE_FILTER,
    HIGHLIGHT_ENERGY_SOURCE, SHOW_ENERGY_SOURCES, SHOWING_PROFILE
} from "./action_types";

export const addEnergySource = content => ({
    type: ADD_ENERGY_SOURCE,
    payload: content
});

export const addEnergySources = content => ({
    type: LOAD_ENERGY_SOURCES,
    payload: content
});

export const setPriceFilter = content => ({
    type: SET_PRICE_FILTER,
    payload: content
});

export const setSourceTypeFilter = content => ({
    type: SET_SOURCE_TYPE_FILTER,
    payload: content
});

export const setPowerFilter = content => ({
    type: SET_POWER,
    payload: content
});

export const highlightEnergySource = content => ({
    type: HIGHLIGHT_ENERGY_SOURCE,
    payload: content
});

export const showProfile = content => ({
    type: SHOWING_PROFILE,
    payload: content
});