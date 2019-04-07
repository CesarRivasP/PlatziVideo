import React from 'react';
import {
  View,
  ActivityIndicator,
  Image,
  StyleSheet
} from 'react-native';


const Loading = (props) => {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/logo.png')} style={styles.logo}/>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', //en lo vertical
    alignItems: 'center'  //en lo horizontal
  },
  logo: {
    marginBottom: 10,
    width: 200,
    height: 80,
    resizeMode: 'contain'
  }
})

export default Loading;
