import React from 'react';
import PropTypes from 'prop-types';

import Video from './Video';

const VideoList = (props) => {
  return (
    <div className="container">
      <hr/>
      <h1 className="text-center">{props.title}</h1>
      <div className="row">
        {props.videos.map((video) => {
            return <Video video={video} key={video.id.videoId} />;
        })
        }
      </div>
    </div>
  );
};

VideoList.propTypes ={
  videos: PropTypes.arrayOf(PropTypes.object),
};

export default VideoList;
