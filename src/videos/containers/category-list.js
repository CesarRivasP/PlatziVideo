import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Suggestion from '../components/suggestion';
import Layout from '../components/suggestion-list-layout';
import Separator from '../components/vertical-separator';
import Empty from '../components/empty';

class CategoryList extends Component {

  renderItem = ({item}) => {
    return (
      <Suggestion { ...item } />
      //todas las propiedades del item
    );
  }

  itemSeparator = () => {
    return (
      <Separator />
    );
  }

  renderEmpty = () => {
    return (
      <Empty text="No hay Categorias" />
    );;
  }

  keyExtractor = (keys) => keys.id.toString();

  render() {
    return (
      <Layout title="Categorias">
        <FlatList
          // horizontal={true}
          horizontal //por defecto se esta estableciendo true
          keyExtractor={this.keyExtractor}
          data={ this.props.list }
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator} //para los separadores
          renderItem={this.renderItem}
        />
      </Layout>
    )
  }
}

export default CategoryList;