import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import Loading from './src/sections/components/loading';
import { store, persistor } from './src/store/store';
import AppLayout from './src/app';


type Props = {};
export default class App extends Component<Props> {
  // state = {
    // suggestionList: [],
    // categoryList: [],
    // loading: true
  // }

  render() {
    // const { loading, suggestionList, categoryList } = this.state;
    return (
      <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          <AppLayout />
        </PersistGate>
      </Provider>
    );
  }
}

// const styles = StyleSheet.create({
//   containerLoading: {
//     flex: 1,
//     justifyContent: 'center'
//   },
//   containerVideo: {
//      flex: 1,
//      height: 300
//   }
// })

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
