import React from 'react';
import { Link } from 'react-router-dom';

const VideoDetail = (props) => {
  return(
    <div className="row">
        <h3>{props.currentVideo.snippet.title}</h3>
        <iframe
          width="560"
          height="315"
          title={props.currentVideo.snippet.title}
          src={'https://www.youtube.com/embed/' + props.currentVideo.id + '?autoplay=1'}
          frameBorder="0"
          allowFullScreen
        >
        </iframe>
        <br/>
        <Link to="/" className="btn btn-primary">Back To Search</Link>
    </div>
  );
};

export default VideoDetail;
