import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import Category from '../components/category';
import Layout from '../components/category-list-layout.js';
import HorizontalSeparator from '../components/horizontal-separator';
import Empty from '../components/empty';


class CategoryList extends Component {

  renderItem = ({item}) => {
    return (
      <Category { ...item } />
      //todas las propiedades del item
    );
  }

  itemSeparator = () => {
    return (
    <HorizontalSeparator />
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

const mapStateToProps = (state) => {
  // debugger
  return {
    list: state.categoryList
  }
}


export default connect(mapStateToProps, null)(CategoryList);
