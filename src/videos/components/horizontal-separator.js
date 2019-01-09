import React from 'react';
import { View, StyleSheet } from 'react-native';


const HorizontalSeparator = () => {
  return (
    <View style={ styles.separator }/>
  );
}

const styles= StyleSheet.create({
  separator: {
    flex: 1,
    marginHorizontal: 5,
  }
})

export default HorizontalSeparator;
