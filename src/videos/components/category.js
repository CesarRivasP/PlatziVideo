import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';


const Category = (props) => {
  return (
    <ImageBackground style={styles.wrapper} source={{ uri: props.background_image }}>
      <Text style={styles.genre}>{props.genres[0]}</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  wrapper:{
    width: 250,
    height: 100,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent:'center'
  },
  genre:{
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    //- En android no funcionan las sombra
    textShadowColor: 'rgba(0,0,0, .75)',  //(color, .alfa )
    textShadowOffset: {
      width: 2,
      height: 2
    },
    textShadowRadius: 0,
  },
})

export default Category;
