import React, {Component} from 'react';
import { Text } from 'react-native';
import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/containers/suggestion-list'

import API from './utils/api'

type Props = {};
export default class App extends Component<Props> {
  state = {
    suggestionList: []
  }
  // componentDidMount(){
  // Para qe el componentDidMount sea asincrono
  async componentDidMount() {
    //Aqui se va a mandar la peticion a la api
    // API.getSuggestion(10);
    const movies = await API.getSuggestion(10);
    console.log(movies);
    this.setState({ suggestionList: movies })
  }

  render() {
    return (
      <Home>
        <Header />
        <Text>Buscador</Text>
        <Text>Categorias</Text>
        <SuggestionList list={this.state.suggestionList}/>
      </Home>
    );
  }
}


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
