import axios from 'axios';

import constant from '../constants/videoConstants';

/*
 * action creators
 */

// GetVideoList actions
const getVideoListSuccess = (videoList) => ({
  type: constant.GET_VIDEO_LIST_SUCCESS,
  videoList
});

const getVideoList = (searchResult) => (dispatch) => {
  // Make API request for Video List
  axios.get(`https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}&part=snippet,id&order=date&maxResults=10&q=${searchResult}`)
    .then((res) => {
      dispatch(getVideoListSuccess(res.data.items));
    })
    .catch((err) => {
      console.log(err);
    });
};

// GetCurrentVideo actions
const getCurrentVideoSuccess = (currentVideo) => ({
  type: constant.GET_CURRENT_VIDEO_SUCCESS,
  currentVideo
});

const getCurrentVideo = (videoId) => (dispatch) => {

  // Make a API request for video
  axios.get(`https://www.googleapis.com/youtube/v3/videos?key=${process.env.REACT_APP_API_KEY}&id=${videoId}&part=snippet,contentDetails,statistics`)
    .then((res) => {
      dispatch(getCurrentVideoSuccess(res.data.items));
    })
    .catch((err) => {
      console.log(err);
    });
};

export {
  getVideoList,
  getCurrentVideo,
};