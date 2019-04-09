import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


const Details = (props) => {
  return (
    <View>
      <View style={styles.top}>
        <Text>{ props.title }</Text>
      </View>
      <View style={styles.bottom}>
        <View style={styles.details}>
          <Image style={styles.cover} source={{ uri: props.medium_cover_image }}/>
          <Text style={styles.description}>{ props.description_full }</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cover: {
    width: 125,
    height: 190
  },
  top: {
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
    padding: 20,
    backgroundColor: 'white'
  },
  details: {
    flexDirection: 'row',
    marginBottom: 20
  },
  bottom: {
    padding: 10,
    // flex: 1
  },
  description: {
    fontSize: 15,
    lineHeight: 22.5,
    color: '#4c4c4c',
    marginLeft: 10,
    flex: 1
  }
})
export default Details;
