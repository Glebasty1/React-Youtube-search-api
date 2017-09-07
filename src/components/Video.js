import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const Video = (props) => {
  return(
    <div>
      <h4>{props.video.snippet.title}</h4>
      <Link to={'/movie/' + props.video.id.videoId}>
        <img
          src={props.video.snippet.thumbnails.medium.url}
          alt={props.video.snippet.title}
        />
      </Link>
      <br/>
      <br/>
    </div>
  );
};


Video.propTypes ={
  video: PropTypes.object,
};

export default Video;