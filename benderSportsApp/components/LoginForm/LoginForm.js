import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

export default class LoginForm extends Component {

   state = {
      email: '',
      password: ''
   }

   handleEmail = (text) => {
      this.setState({ email: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }
   login = (email, pass) => {
      alert('email: ' + email + ' password: ' + pass)
   }

   render() {
      return (
         <View style = {styles.container}>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               type= "email"
               placeholder = "Email"
               placeholderTextColor = "black"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}
            />
            
            <TextInput secureTextEntry={true} style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "black"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}
            />

            <Text style={styles.forgotText}>Forgot Password?</Text>

            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.email, this.state.password)
               }
            >
               <Text style = {styles.submitButtonText}> Log In </Text>
            </TouchableOpacity>

            <TouchableOpacity
               style = {styles.registerButton}
            >
               <Text style = {styles.registerButtonText}> Register </Text>
            </TouchableOpacity>

         </View>
      )
   }
}

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: 'white',
      borderWidth: 2,
      backgroundColor: 'white',
      borderRadius: 10
   },
   submitButton: {
      backgroundColor: '#add8e6',
      padding: 10,
      margin: 15,
      height: 45,
      borderRadius: 10
   },
   submitButtonText:{
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center'
   },
   registerButton: {
       backgroundColor: '#add8e6',
       padding: 25,
       margin: 25,
       height: 90,
       borderRadius: 10
   },
   registerButtonText: {
       color: 'white',
       fontWeight: 'bold',
       fontSize: 30,
   },
   forgotText: {
    color: 'white',
    textAlign: 'center'
   },
})
