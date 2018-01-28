import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import BehanceImages from '../components/BehanceImages';
import * as BehanceImagesActions from '../actions/behanceImages';

function mapStateToProps(state) {
  return {
    images: state.behanceImages
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(BehanceImagesActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BehanceImages);
