import {combineReducers} from 'redux';

import {loadContacts} from './contacts';
import { updateCurrentIndex } from "./currentIndex";

export const rootReducer = combineReducers({
    contacts: loadContacts,
    currentIndex: updateCurrentIndex,
});