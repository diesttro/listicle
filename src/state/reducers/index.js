import { combineReducers } from 'redux';
import articles from './articles';
import formDialog from './formDialog';
import order from './order';

const rootReducer = combineReducers({
  articles,
  formDialog,
  order,
});

export default rootReducer;
