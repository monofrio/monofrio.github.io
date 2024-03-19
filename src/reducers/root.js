import { combineReducers } from 'redux';

import combatPowerReducer from './combatPower';
import gameTagsReducer from './gameTags';
import customGameTagsReducer from './customGameTags';
import findTagsReducer from './findTags'
import attributeAppraisalReducer from "./AttributeAppraisal";

const rootReducer = combineReducers({
    combatPower: combatPowerReducer,
    gameTags: gameTagsReducer,
    customGameTags: customGameTagsReducer,
    findTags: findTagsReducer,
    attributeAppraisal: attributeAppraisalReducer,
});

export default rootReducer;