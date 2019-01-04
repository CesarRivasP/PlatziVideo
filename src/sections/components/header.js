import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';


const Header = (props) => {
  return (
    <View>
      <SafeAreaView>
        <View style={styles.container}>
          <Image
            source={require("../../../assets/logo.png")}
            style={styles.logo}
          />
          <View style={styles.right}>
            { props.children }
          </View>
        </View>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#eef2f3',
    flexDirection: 'row'
  },
  logo: {
    width: 80,  //ancho
    height: 26, //alto
    resizeMode: 'contain',  //por defecto esta en 'cover'
  },
  right:{
    flexDirection: 'row', //por defecto se encuentra en column
    flex:1, //asi este elemento ocupara mas espacio
    justifyContent: 'flex-end',
  }
})

export default Header;
/*
Como este componente va a ser el padre del resto de cosas que formaran parte de la aplicacion, retorna:
this.props.children

- resizeMode es semejante a backgroud-size. Se encarga de que la imagen entre completa
en el tamaño que se le especifica.

*/
