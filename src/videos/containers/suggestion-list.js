import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';
import Suggestion from '../components/suggestion'


class SuggestionList extends Component {



  renderItem = ({item}) => {
    return (
      <Suggestion { ...item } />
    )
  }

  render () {
    const list = [
      {
        key: '1',
        title: 'Ces',
      },
      {
        key: '2',
        title: 'sar',
      }
    ]
    return (
      <FlatList
        data={ list }
        renderItem={this.renderItem}
      />
    );
  }
}

export default SuggestionList;
