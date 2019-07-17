//import react  and react-native components
import React, {Component} from 'react';
import {View, StyleSheet, Image} from 'react-native';

import BSLogo from './bs-logo.png';

import LoginForm from './components/LoginForm/LoginForm';


export default class App extends Component{
  
  //render method is like paint
  render() {

    //must return something
    return(
      //View is whats on screen
      //<Component1 /> is the js file being loaded into the View
      //REMEMBER THE SPACE BY THE SLASH
      <View style={styles.container}>
        <Image source={BSLogo} style={styles.logo}/>
        <LoginForm/>
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

