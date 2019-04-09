import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import Suggestion from '../components/suggestion';
import Layout from '../components/suggestion-list-layout';
import Separator from '../components/vertical-separator';
import Empty from '../components/empty'

class SuggestionList extends Component {


  itemSeparator = () => {
    return (
      <Separator /*color="red"*/ />
    );
  }

  renderEmpty = () => {
    return (
      <Empty text="No hay sugerencias" />
    );
  }

  keyExtractor = (keys) => keys.id.toString();

  viewMovie = (item) => {
    this.props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: item
      }
    })
  }

  renderItem = ({item}) => {
    return (
      <Suggestion onPress={() => { this.viewMovie(item) }} { ...item } />
      //todas las propiedades del item
    );
  }

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

const mapStateToProps = (state) => {
  return {
    list: state.suggestionList
  }
}

export default connect(mapStateToProps)(SuggestionList);

/*
keyExtractor: propiedad de FlatList
*/
