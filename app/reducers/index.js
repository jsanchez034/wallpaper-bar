// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import behanceImages from './behanceImages';

const rootReducer = combineReducers({
  counter,
  router,
  behanceImages
});

export default rootReducer;
