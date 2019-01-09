import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Layout from '../components/layout.js';
import Video from 'react-native-video';

class Player extends Component {
  render() {
    return (
      <Layout
        video={ //asi se envia un componente como si fuera una propiedad
          <Video
            source={{ uri: 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'}}
            style={styles.video}  //asi se hace re size en si mismo
            resizeMode="contain" //Asi mantiene sus proporciones | cover aprovecha todo el tamaño
          />
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
*/
