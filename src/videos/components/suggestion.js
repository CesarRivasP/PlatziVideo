import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Suggestion = (props) => {
  // let genre = (props.genres) ? props.genres[0] : "No category"
  const { title, genres, rating, year } = props;
  return(
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.container}>
        <View style={styles.left}>
          <Image
            source={{ uri: props.medium_cover_image }}
            style={styles.cover}
          />
          <View style={styles.genre}>
            {/* si se quiere mapear todos los elementos de la lista */}
            {/* { props.genres.map(genre => <Text style={styles.genreText}>{genre}</Text>)} */}
            <Text style={styles.genreText}>{ genres ? genres[0] : "No Category" }</Text>
          </View>
        </View>
        <View style={styles.right}>
          <Text style={styles.title}>{ title }</Text>
          <Text style={styles.year}>{ year }</Text>
          <Text style={styles.rating}>{ rating }</Text>
        </View>
      </View>
    </TouchableOpacity>
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
    flexDirection: 'row',
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

// stretch? es el valor por dedecto de alignSelf
