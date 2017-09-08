import { combineReducers } from 'redux';

import video from './videoReducer';

const reducers = {
  video,
};

const reducer = combineReducers(reducers);

export default reducer;