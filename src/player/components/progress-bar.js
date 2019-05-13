import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import BarProgress from 'react-native-progress/Bar';

class ProgressBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      duration: props.duration
    }
  }

  handleProgressPress = (e) => {
    const position = e.nativeEvent.locationX;
    const progress = (position / 250) * this.state.duration;
    this.props.player.seek(progress)
  };

  render(){
    return (
      <View>
        <TouchableWithoutFeedback onPress={this.handleProgressPress}>
          <View>
            <BarProgress
              progress={this.props.progress}
              color="#FFF"
              unfilledColor="rgba(255 , 255, 255, .5)"
              borderColor="#FFF"
              width={250}
              height={20}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

export default ProgressBar;
