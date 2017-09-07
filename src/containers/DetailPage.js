import React from 'react';
import axios from 'axios';

import VideoDetail from '../components/VideoDetail';

class DetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: {},
      error: '',
      isLoading: true,
    };
  }

  componentDidMount() {
    // Make a API request for video
    axios.get(`https://www.googleapis.com/youtube/v3/videos?key=${process.env.REACT_APP_API_KEY}&id=${this.props.match.params.id}&part=snippet,contentDetails,statistics`)
      .then((res) => {
        this.setState({
          currentVideo: res.data.items,
          isLoading: false,
        });
        console.log('currentVideo', this.state.currentVideo);
      })
      .catch((err) => {
        this.setState({
          error: 'Server Error. Cant load data.',
          isLoading: false,
        });
        console.log(err);
      });
  }

  render() {
    return(
      <div>
        {this.state.isLoading ? <h1 className="text-center">Loading page...</h1> :
          <div className="container">
            <h1 className="text-center">Video Detail</h1>
            {this.state.error.length > 1 ?
              <div className="alert alert-danger">
                {this.state.error}
              </div> :
              <div>
                {this.state.currentVideo.map((video) => {
                  return <VideoDetail currentVideo={video} key={video.id} />;
                })
                }
              </div>
            }
          </div>
        }
      </div>
    );
  }
}

export default DetailPage;