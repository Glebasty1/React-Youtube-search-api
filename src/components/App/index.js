import { connect } from 'react-redux';
import { getVideoList }  from '../../actions/videoActions';
import App from './App';

// MainPage container
const mapStateToProps = state => ({
  videoList: state.video.get('videoList'),
});

const mapDispatchToProps = dispatch => ({
  getVideoList: (searchResult) => {
    dispatch(getVideoList(searchResult));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);