import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
// import { Icon } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';


const FullScreen = (props) => {
  const { onPress, fullscreen } = props;
  return (
    <TouchableHighlight
      onPress={onPress}
      style={styles.container}
      // underlayColor="red"
      hitSlop={{
        left: 5,
        top: 5,
        bottom: 5,
        right: 5
      }}>
      {/* {
        fullscreen ?
          <Icon color="#FFF" type="FontAwesome" name="compress" style={styles.fullscreen}/>
          :
          <Icon color="#FFF" type="FontAwesome" name="arrows-alt" style={styles.fullscreen}/>
      } */}
      <Icon color="#FFF" name={ fullscreen ? 'compress' : 'arrows-alt'} size={28} style={styles.fullscreen}/>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 3
  },
  button: {
    color: 'white',
    borderRadius: 8,
    paddingVertical: 3,
    paddingHorizontal: 5,
    // backgroundColor: 'grey',
    borderColor: 'white',
  },
  fullscreen: {
    justifyContent: 'flex-end',
    textAlign: 'right',
  }
});

export default FullScreen;

//En RN no se usa onPress, se usan los siguientes componentes
//ToachableHighlight: al pulsar se puede hacer un highlight de algun tipo de color
//ToachableOpacity al pulsar hace como un destello
//ToachableWithoutFeedback reacciona al presionar
