import { combineReducers } from 'redux';

import combatPowerReducer from './combatPower';
import gameTagsReducer from './gameTags';
import customGameTagsReducer from "./customGameTags";

const rootReducer = combineReducers({
    combatPower: combatPowerReducer,
    gameTags: gameTagsReducer,
    customGameTags: customGameTagsReducer
});

export default rootReducer;