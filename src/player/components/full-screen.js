import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import { Icon } from 'native-base';


const iconExitFullScreen = (
  <view>
    <Icon name="fullscreen-exit" /*size={30} color="#900"*/ />
  </view>
);

const FullScreen = (props) => {
  const { onPress, fullscreen } = props;
  return (
    <TouchableHighlight
      onPress={onPress}
      style={styles.container}
      underlayColor="red"
      hitSlop={{
        left: 5,
        top: 5,
        bottom: 5,
        right: 5
      }}>
      {
        fullscreen ?
          <Icon type="FontAwesome" name="compress" style={styles.fullscreen}/>
          :
          <Icon type="FontAwesome" name="arrows-alt" style={styles.fullscreen}/>
      }
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
