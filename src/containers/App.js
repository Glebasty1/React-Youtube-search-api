import React from 'react';
import axios from 'axios';

import SearchBar from './../components/SearchBar';
import VideoList from './../components/VideoList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBar: '',
      videoList: [],
    };
  }

  changeSearch = (e) => {
    this.setState({
      searchBar: e.target.value,
    });
  };

  getVideoList = (e) => {
    if(this.state.searchBar === '') {
      return 0;
    }
    e.preventDefault();
    // Make a API request for videos
    axios.get(`https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}&part=snippet,id&order=date&maxResults=10&q=${this.state.searchBar}`)
      .then((res) => {
        this.setState({
          videoList: res.data.items,
          searchBar: '',
        });
        console.log(this.state.videoList);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <h1 className="text-center">YouTube Search API</h1>
          <br/>
          <SearchBar
            searchBar={this.state.searchBar}
            changeSearch={this.changeSearch}
            getVideoList={this.getVideoList}
          />
          <VideoList videos={this.state.videoList} />
        </div>
      </div>
    );
  }
}

export default App;
