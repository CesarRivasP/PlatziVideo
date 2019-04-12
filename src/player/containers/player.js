import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableWithoutFeedback,
  ProgressBarAndroid
 } from 'react-native';
import Video from 'react-native-video';
import { connect } from 'react-redux';
import Layout from '../components/layout';
import ControlLayout from '../components/control-layout';
import PlayPause from '../components/play-pause';
import FullScreen from '../components/full-screen';


class Player extends Component {
  state = {
    loading: true,
    paused: false,
    fullscreen: false,
    muted: false,
    // currentTime: 0.0,
    // duration: 0.0,
    volume: 1,
    repeat: false,
    rate: 1,
    pausedText: 'PLAY'
  }

  onBuffer = ({isBuffering}) => {  // isBuffering indica si esta cargando o no
    this.setState({ loading: isBuffering })
  }

  setTime = (payload) => {
    let currentTime= timeReadable(payload.currentTime);
    this.props.dispatch({
      type: 'UPDATE_PROGRESS_BAR',
      payload: {
        currentTime,
        progress: (payload.currentTime / payload.seekableDuration),
        duration: payload.seekableDuration
      }
    })
  }

  changeSliderStarted = (value) => {
    this.props.dispatch({
      type: 'CHANGE_SLIDER_STARTED',
      payload: {
        progress: value,
        currentTime: timeReadable(this.props.duration * value),
        changeActive: true
      }
    })
  };

  changeSliderFinished = (value) => {
    this.props.dispatch({
      type: 'CHANGE_SLIDER_FINISHED',
      payload: {
        changeActive: false
      }
    })
    this.props.seek(this.props.duration * value;)
  };


  onEnd = () => {
    this.setState({ pausedText: 'PLAY', paused: true })
    this.video.seek(0);
  }

  // onLoad = () => {
  //   this.setState({ loading: false }) mediante onLoad indica cuando ya cargo el video
  // }

  playPause = () => {
    this.setState({
      paused: !this.state.paused
    }); //Para que sea inverso a como estaba anteriormente
  }

  fullScreen = () => {
    this.setState({
      fullscreen: !this.state.fullscreen
    })
  }

  render() {
    const { loading } = this.state;
    return (
      <Layout
        loading={loading}
        video={ //asi se envia un componente como si fuera una propiedad
          <TouchableWithoutFeedback onPress={() => this.setState({paused: !this.state.paused})}>
            <Video
              source={{ uri: 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'}}
              style={styles.video}  //asi se hace re size en si mismo
              resizeMode="contain" //Asi mantiene sus proporciones | cover aprovecha todo el tamaño
              onBuffer={this.onBuffer}
              // onLoad={this.onLoad} en caso de que no funcione en android la validacion con onBuffering
              paused={this.state.paused}
              fullscreen={this.state.fullscreen}
              onEnd={this.onEnd}
              onProgress={this.setTime}
              volume={this.state.volume}
              muted={this.state.muted}
              repeat={this.state.repeat}
              rate={this.state.rate}
              hideConstrols={false}
            />
          </TouchableWithoutFeedback>

        }
        loader={
          <ActivityIndicator color="red" />
        }
        controls={
          <ControlLayout>
            <PlayPause onPress={this.playPause} paused={this.state.paused}/>
            <ProgressBar
              progress={this.props.progress}
              onChangeStarted={this.props.changeSliderStarted}
              onChangeFinished={this.props.changeSliderFinished}
            />
            <Text>time left</Text>
            <FullScreen onPress={this.fullScreen} fullscreen={this.state.fullscreen}/>
          </ControlLayout>
        }>
      </Layout>
    );
  }
}
const timeReadable = (time)  => {
  let duration = time / 60;
  let mins = Math.floor(duration);
  let seconds = duration % 1;
  seconds = (seconds * 60) / 1000;
  let currentTime = (mins + seconds * 10).toFixed(2);
  
  return currentTime;
}

const styles = StyleSheet.create({
  video: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0
  }
})

const mapStateToProps = (state) => {
  return {
    progress: state.progress,
    currentTime: state.currentTime,
    duration: state.duration,
    changeActive: state.changeActive,
  }
}

export default connect(mapStateToProps)(Player);

/*
Con todo esto el video va a ser flexible, es decir, que su layout es el que va a necesitar
un tamaño definido para que el video haga resize y se ponga en posicion absoluta, por ejemplo.
- De la forma en la que se esta pasando el componente al layout, indica que en el layout, un
componente que aun no se ha creado, le va a llegar una propiedad video la cual va a contener
el componente video
Si una propiedad esta en {true|false} significa que esta interactuando
*/
