import React from 'react';
import { View, StyleSheet } from 'react-native';


const ControlLayout = (props) => {
  return (
    <View style={styles.container}>
      { props.children }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 40,
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});

export default ControlLayout;
