import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import Home from './screens/containers/home';
import SuggestionList from './videos/containers/suggestion-list';
import CategoryList from './videos/containers/category-list';
import Player from './player/containers/player';
import Header from './sections/components/header';
import API from '../utils/api';

class AppLayout extends Component {

  // componentDidMount(){
  // Para qe el componentDidMount sea asincrono
  async componentDidMount() {
    //Aqui se va a mandar la peticion a la api
    const categoryList = await API.getMovies();
    // console.log(categoryList);
    // store.dispatch({ Cuando estaba declarado en el app principal
    this.props.dispatch({
      type: 'SET_CATEGORY_LIST',
      payload: {
        categoryList
      }
    })
    // API.getSuggestion(10);
    const suggestionList = await API.getSuggestion(10);
    // console.log(suggestionList);
    // this.setState(
    //   { suggestionList: suggestionList, loading: false, categoryList: categoriesList  }
    // )
    this.props.dispatch({
      type: 'SET_SUGGESTION_LIST',
      payload: {
        suggestionList
      }
    })
  }

  render () {
    return (
      <Home>
        <Header />
        <Player />
        <Text>Buscador</Text>
        {/* {
          loading ?
          <Loading /> : <SuggestionList list={ suggestionList }/>
        } */}
        <CategoryList /*list={ categoryList }*/ />
        <SuggestionList /*list={ suggestionList }*/ />
      </Home>
    );
  }
}

export default connect(null)(AppLayout);
