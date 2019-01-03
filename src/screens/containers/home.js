import React, { Component } from 'react';

class Home extends Component {
  render () {
    return this.props.children;
  }
}

export default Home;

/*
Como este componente va a ser el padre del resto de cosas que formaran parte de la aplicacion, retorna:
this.props.children
*/
