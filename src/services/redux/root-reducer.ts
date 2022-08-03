import { combineReducers } from 'redux';
import { rulesReducer } from './slices/rules/rules';

export const rootReducer = combineReducers({
  rules: rulesReducer,
});
