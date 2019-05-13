import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const secondsToTime = (time) => {
  return ~~(time / 60) + ":" + (time % 60 < 10 ? "0" : "") + time % 60;
}

const Duration = (props) => {
  return (
    <View>
      <Text style={styles.duration}>
        { secondsToTime(Math.floor(props.progress * props.duration))}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  duration: {
    color: '#FFF',
    marginLeft: 15
  }
})

export default Duration;
