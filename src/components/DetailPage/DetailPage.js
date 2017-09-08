import React from 'react';


import VideoDetail from '../VideoDetail/VideoDetail';

class DetailPage extends React.Component {
  componentDidMount() {
    // Make a API request for video
    this.props.getCurrentVideo(this.props.match.params.id);
  }

  render() {
    return(
      <div>
          <div className="container">
            <h1 className="text-center">Video Detail</h1>
              <div>
                {this.props.currentVideo ? this.props.currentVideo.map((video) => {
                  return <VideoDetail currentVideo={video} key={video.id} />;
                }) : null
                }
              </div>
          </div>
      </div>
    );
  }
}

export default DetailPage;