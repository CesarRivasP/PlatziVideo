import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import Video from 'react-native-video';
import Layout from '../components/layout';
import ControlLayout from '../components/control-layout';
import PlayPause from '../components/play-pause';
import FullScreen from '../components/full-screen';


class Player extends Component {
  state = {
    loading: true,
    paused: false,
    fullscreen: false
  }

  onBuffer = ({isBuffering}) => {  // isBuffering indica si esta cargando o no
    this.setState({ loading: isBuffering })
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
          <Video
            source={{ uri: 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'}}
            style={styles.video}  //asi se hace re size en si mismo
            resizeMode="contain" //Asi mantiene sus proporciones | cover aprovecha todo el tamaño
            onBuffer={this.onBuffer}
            // onLoad={this.onLoad} en caso de que no funcione en android la validacion con onBuffering
            paused={this.state.paused}
            fullscreen={this.state.fullscreen}
          />
        }
        loader={
          <ActivityIndicator color="red" />
        }
        controls={
          <ControlLayout>
            <PlayPause onPress={this.playPause} paused={this.state.paused}/>
            {/* <ProgressBar 
              progress={this.props.progress}
              onChangeStarted={this.changeSliderStarted}
              onChangeFinished={this.changeSliderFinished}
            /> */}
            <Text>time left</Text>
            <FullScreen onPress={this.fullScreen} fullscreen={this.state.fullscreen}/>
          </ControlLayout>
        }>
      </Layout>
    );
  }
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
export default Player;

/*
Con todo esto el video va a ser flexible, es decir, que su layout es el que va a necesitar
un tamaño definido para que el video haga resize y se ponga en posicion absoluta, por ejemplo.
- De la forma en la que se esta pasando el componente al layout, indica que en el layout, un
componente que aun no se ha creado, le va a llegar una propiedad video la cual va a contener
el componente video
Si una propiedad esta en {true|false} significa que esta interactuando
*/
