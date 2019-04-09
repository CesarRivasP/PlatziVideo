import React, { Component } from 'react';
import MovieLayout from '../components/movie-layout';
import Header from '../../sections/components/header';
import Player from '../../player/containers/player';


class Movie extends Component {
  render () {
    return (
      <MovieLayout>
        <Header />
        <Player />
      </MovieLayout>
    );
  }
}

export default Movie;
