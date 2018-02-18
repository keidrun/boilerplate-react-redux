import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { musicsList, musiciansList } from '../actions';
import MusicsList from '../components/musicsList';

class HomeContainer extends Component {
  componentWillMount() {
    this.props.musicsList();
    this.props.musiciansList();
  }

  render() {
    return <MusicsList {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    data: state.musics
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      musicsList,
      musiciansList
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
