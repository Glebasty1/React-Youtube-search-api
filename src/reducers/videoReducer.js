import { Map } from 'immutable';
import constant from '../constants/videoConstants';

const initialState = Map({
  videoList: null,
  error: null,
  currentVideo: null,
});

// Video reducer
const videoReducer = (state = initialState, action) => {
  switch (action.type) {
    case constant.GET_VIDEO_LIST_SUCCESS:
      return state
        .set('videoList', action.videoList);
    case constant.GET_CURRENT_VIDEO_SUCCESS:
      return state
        .set('currentVideo', action.currentVideo);
    default:
      return state;
  }
};

export default videoReducer;
