import {combineReducers} from "redux";
import filters from "./filters";
import energy_sources from "./energy_sources";
import highlight_source from "./highlight_source";
import profiledisplay from "./profiledisplay";

export default combineReducers({ energy_sources, filters, highlight_source, profiledisplay });