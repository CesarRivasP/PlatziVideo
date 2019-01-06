import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';
import Suggestion from '../components/suggestion';
import Layout from '../components/suggestion-list-layout';
import Separator from '../components/vertical-separator';
import Empty from '../components/empty'

class SuggestionList extends Component {


  renderItem = ({item}) => {
    return (
      <Suggestion { ...item } />
      //todas las propiedades del item
    );
  }

  itemSeparator = () => {
    return (
      <Separator /*color="red"*/ />
    );
  }

  renderEmpty = () => {
    return (
      <Empty text="No hay sugerencias" />
    );;
  }

  keyExtractor = (keys) => keys.id.toString();

  render () {
    // const list = [
    //   {
    //     key: '1',
    //     title: 'Ces',
    //   },
    //   {
    //     key: '2',
    //     title: 'sar',
    //   }
    // ]
    return (
      <Layout title="Recomendado para ti">
        <FlatList
          keyExtractor={this.keyExtractor}
          data={ this.props.list }
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator} //para los separadores
          renderItem={this.renderItem}
        />
      </Layout>
    );
  }
}

export default SuggestionList;

/*
keyExtractor: propiedad de FlatList
*/
