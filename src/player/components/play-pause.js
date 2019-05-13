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

const PlayPause = (props) => {
  const { paused, onPress } = props;
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
      }}  //espacio alrededor del boton en el cual puede reaccionar
    >
      <Icon name={paused ? "play" : "pause"} size={28} color="#FFF" />
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

});

export default PlayPause;

//En RN no se usa onPress, se usan los siguientes componentes
//ToachableHighlight: al pulsar se puede hacer un highlight de algun tipo de color
//ToachableOpacity al pulsar hace como un destello
//ToachableWithoutFeedback reacciona al presionar
