import React, {Component} from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import Home from './src/screens/containers/home';
import SuggestionList from './src/videos/containers/suggestion-list';
import CategoryList from './src/videos/containers/category-list';
import Player from './src/player/containers/player';
import Header from './src/sections/components/header';
import Loading from './src/sections/components/loading';
import API from './utils/api';
import { store, persistor } from './src/store/store';


type Props = {};
export default class App extends Component<Props> {
  state = {
    // suggestionList: [],
    // categoryList: [],
    loading: true
  }
  // componentDidMount(){
  // Para qe el componentDidMount sea asincrono
  async componentDidMount() {
    //Aqui se va a mandar la peticion a la api
    const categoryList = await API.getMovies();
    // console.log(categoryList);
    store.dispatch({
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
    store.dispatch({
      type: 'SET_SUGGESTION_LIST',
      payload: {
        suggestionList
      }
    })
  }

  render() {
    const { loading, suggestionList, categoryList } = this.state;
    return (
      <Provider store={store}>
        <PersistGate loading={<Text>Cargando ...</Text>} persistor={persistor}>
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
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  containerLoading: {
    flex: 1,
    justifyContent: 'center'
  },
  containerVideo: {
     flex: 1,
     height: 300
  }
})

/*
<Image source={{ uri:'' }} /> Para rutas absolutas (contenido externo de internet)
<Image source={require('route')} /> Rutas relativas
* No hace falta indicar el display, puesto que todos son display flex por defecto
* flexDirection en la web esta en filas 'rows', en RN se encuentra en columnas 'culums'
de manera que ponga los elementos encima de otros.
* background no existe, se usa backgroundColor puesto que en css normal con background se puede poner
una imagen, y en RN no es posible ya que hay un componente dedicado a esa funcionalidad, el cual forma
parte del componente Image.
* StyleSheet.create({  //crear hoja de estilos js
* backgroundColor: Platform.select({
  ios: 'green',
  android: 'grey',
}),
* Como home lo que devuelve son sus hijos, lo se le ponga aqui es lo que se va a renderizar en la UI
- PersistGate es un componente como el provider, que nos permite unir la app con redux persist
*/
