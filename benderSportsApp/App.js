//import react  and react-native components
import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, Image, TextInput} from 'react-native';
import { withOrientation } from 'react-navigation';

import Inputs from './Inputs/Inputs';

export default class App extends Component{
  
  //render method is like paint
  render() {

    //must return something
    return(
      //View is whats on screen
      //<Component1 /> is the js file being loaded into the View
      //REMEMBER THE SPACE BY THE SLASH
      <View style={styles.container}>

        <Image source={require('./bs-logo.png')} style={styles.logo}/>

        <Inputs />

        
      </View>

    );

  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#14A6FA',
    alignItems: 'center',
    
  },

  logo: {
    width: 200,
    height: 200,
    marginTop: 30
  }
});

AppRegistry.registerComponent('bendersportsapp', () => App);