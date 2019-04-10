import React, { Component } from 'react';
import { Animated } from 'react-native';
import { connect } from 'react-redux';
import MovieLayout from '../components/movie-layout';
import Header from '../../sections/components/header';
import Player from '../../player/containers/player';
import Close from '../../sections/components/close';
import Details from '../../videos/components/details';


class Movie extends Component {
  state = {
    opacity: new Animated.Value(0),
  }

  closeVideo = () => {
    this.props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: null
      }
    });
  }

  componentDidMount() {
    Animated.timing(
      // recibe que valor y en que tiempo
      this.state.opacity,
      { //0 es transparente y 1 es totalmente visible
        toValue: 1, // para que pase a 1
        duration: 1000,//cuanto tiempo se quiere que demore
        // por defecto son 500 milisegundos
      }
    ).start();
  }

  render () {
    return (
      <Animated.View style={{
        flex: 1,  //para que ocupe todo el espacio
        opacity: this.state.opacity  //puede ir desde 0 a 1
      }}>
        <MovieLayout>
          <Header>
            <Close onPress={ this.closeVideo } />
          </Header>
          <Player />
          <Details { ...this.props.movie }/>
        </MovieLayout>
      </Animated.View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    movie: state.selectedMovie
  }
}
export default connect(mapStateToProps)(Movie);
