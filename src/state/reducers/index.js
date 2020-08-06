import { combineReducers } from 'redux';
import articles from './articles';
import formDialog from './formDialog';

const rootReducer = combineReducers({
  articles,
  formDialog,
});

export default rootReducer;
