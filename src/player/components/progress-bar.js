import React from 'react';
import { View, Text, Slider } from 'react-native';

const ProgressBar = (props) => {
  return (
    <View>
      <Slider
        maximumValue={props.duration}
        minimumValue={0}

      />
    </View>
  );
}

export default ProgressBar;
