import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Suggestion = (props) => {
  return(
    <View style={styles.container}>
      <View style={styles.left}>
        <Image
          source={require('../../../assets/logo.png')}
          style={styles.cover}
        />
        <View style={styles.genre}>
          <Text style={styles.genreText}>Accion</Text>
        </View>
      </View>
      <View style={styles.right}>
        <Text style={styles.title}>Avengers</Text>
        <Text style={styles.year}>2007</Text>
        <Text style={styles.rating}>Five Stars</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 10
  },
  cover: {
    height: 150,
    width: 100,
    resizeMode: 'contain'
  },
  left: {

  },
  right: {
    paddingLeft: 10,
    justifyContent: 'space-between', //distribuye el contenido segun el alto
  },
  title: {
    fontSize: 18,
    color: '#44546b'
  },
  year: {
    backgroundColor: 'grey',
    paddingVertical: 4,
    color: 'white',
    fontSize: 11,
    borderRadius: 5,
    overflow: 'hidden',
    paddingHorizontal: 6,
    alignSelf: 'flex-start',
  },
  rating: {
    color: '#6b6b6b',
    fontSize: 14,
    fontWeight: 'bold',
  },
  genre: {
    position:'absolute',
    left: 0,
    top: 0,
    backgroundColor: 'black',
  },
  genreText: {
    color: 'white',
    fontSize: 11,
    paddingVertical: 5,
    paddingHorizontal: 7,
  }
})

export default Suggestion;
