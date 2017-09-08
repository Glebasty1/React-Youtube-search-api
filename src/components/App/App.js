import React from 'react';

import SearchBar from '../SearchBar/SearchBar';
import VideoList from '../VideoList/VideoList';

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

    const searchBar = this.state.searchBar;

    this.props.getVideoList(searchBar);

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
          <VideoList videos={this.props.videoList} />
        </div>
      </div>
    );
  }
}

export default App;
