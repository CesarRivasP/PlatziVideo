import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieLayout from '../components/movie-layout';
import Header from '../../sections/components/header';
import Player from '../../player/containers/player';
import Close from '../../sections/components/close';


class Movie extends Component {

  closeVideo = () => {
    this.props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: null
      }
    });
  }

  render () {
    return (
      <MovieLayout>
        <Header>
          <Close onPress={ this.closeVideo } />
        </Header>
        <Player />
      </MovieLayout>
    );
  }
}

export default connect(null)(Movie);
