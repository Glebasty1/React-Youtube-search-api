import { connect } from 'react-redux';
import { getCurrentVideo }  from '../../actions/videoActions';

import DetailPage from './DetailPage';

// DetailPage container
const mapStateToProps = state => ({
  currentVideo: state.video.get('currentVideo'),
});

const mapDispatchToProps = dispatch => ({
  getCurrentVideo: (videoId) => {
    dispatch(getCurrentVideo(videoId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);