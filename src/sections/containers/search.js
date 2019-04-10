import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';


class Search extends Component {
  state = {
    text: ''
  }

  handleSubmit = () => {
    console.log(this.state.text);
  }

  handleChangeText = (text) => {
    this.setState({
      text
    })
  }

  render () {
    return (
      <TextInput
        style={styles.input}
        placeholder="Busca tu pelicula favorita"
        autoCorrect={false}
        autoCapitalize="none"
        underlineColorAndroid="transparent"
        onSubmitEditing={this.handleSubmit}
        onChangeText={this.handleChangeText} />
    );
  }
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#eaeaea'
  }
})

// const mapStateToProps = (state) => {
//   return {
//     selectedMovie: state.selectedMovie
//   }
// }
export default connect(null)(Search);
