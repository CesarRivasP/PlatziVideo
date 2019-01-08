import React from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet
} from 'react-native';


const Loading = (props) => {
  return (
    <View style={styles.containerLoading}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
}

const styles = StyleSheet.create({
  containerLoading: {
  flex: 1,
  justifyContent: 'center'
  }
})

export default Loading;
