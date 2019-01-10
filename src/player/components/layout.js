import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Layout = (props) => {
  const { loading } = props;
  const { video, loader, controls } = props;
  return (
    <View style={styles.container}>
      <View style={styles.video}>
        { video }
      </View>
      <View style={styles.overlay}>
        {
          loading &&
            loader
        }
      </View>
      { controls }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: '56.25%', //Para tener una proporcion de 16:9 dentro del video
  },
  video: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: 'black'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
export default Layout;

// Proporcion 16:9 -> 720x480 | 320x240
//Dentro de RN no hay herencia de css, por lo que no se pueden hacer
//selectores, subselectores, pseudo selectores, etc
