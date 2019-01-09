import React, {Component} from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/containers/suggestion-list';
import CategoryList from './src/videos/containers/category-list';
import Loading from './src/sections/components/loading';
import API from './utils/api';
import Video from 'react-native-video';

type Props = {};
export default class App extends Component<Props> {
  state = {
    suggestionList: [],
    categoryList: [],
    loading: true
  }
  // componentDidMount(){
  // Para qe el componentDidMount sea asincrono
  async componentDidMount() {
    //Aqui se va a mandar la peticion a la api
    // API.getSuggestion(10);
    const movies = await API.getSuggestion(10);
    console.log(movies);
    const categories = await API.getMovies();
    console.log(categories);
    this.setState(
      { suggestionList: movies, loading: false, categoryList: categories  }
    )
  }

  render() {
    const { loading, suggestionList, categoryList } = this.state;
    return (
      <Home>
        <Header />
        <View style={{ flex: 1, height: 100 }}>
          <Video
            source={{ uri: 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'}}
            style={{ position: 'absolute', left: 0, right: 0, bottom: 0, top: 0 }}  //asi se hace re size en si mismo
            resizeMode="contain" //Asi mantiene sus proporciones | cover aprovecha todo el tamaño
          />
        </View>
        <Text>Buscador</Text>
        {/* {
          loading ?
            <Loading /> : <SuggestionList list={ suggestionList }/>
        } */}
        <CategoryList list={ categoryList } />
        <SuggestionList list={ suggestionList }/>
      </Home>
    );
  }
}

const styles = StyleSheet.create({
  containerLoading: {
    flex: 1,
    justifyContent: 'center'
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
*/
