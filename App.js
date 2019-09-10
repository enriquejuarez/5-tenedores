import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import t from 'tcomb-form-native'
import { LoginStruct, LoginOptions } from './app/components/forms/testform'
import { Button } from 'react-native-elements'
import PreLoad from './app/components/PreLoad'

const Form = t.form.Form

export default class App extends Component { 

  constructor(){
    super()

    this.state = {
      testFormValue: {
        user: '',
        password: ''
      },
      testFormError: '',
      loaded: false
    }
  }

  sendFormTest = () => {
    const validate = this.refs.formTest.getValue()
    console.log(validate)
    if (validate) {
      this.setState({
        testFormError: ''
      })
    }else{
      this.setState({
        testFormError: 'Llena todos los campos'
      })
    }

  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({loaded: true})
    }, 2000)
  }

  onChange = (testFormValue) => {
    console.log(testFormValue)
    this.setState({
      testFormValue
    })
  }

  render(){

    const { testFormValue, testFormError, loaded } = this.state
    

    if (!loaded) {
      return(
        <PreLoad />
      )
    }else{
      return (
        <View style={styles.container}>
          <Form 
            ref='formTest'
            type= { LoginStruct }
            options= { LoginOptions }
            value= { testFormValue }
            onChange= { v => this.onChange(v) }
          />
          <Button
            title="Login"
            onPress= { this.sendFormTest.bind(this) }
          />
          <Text style={styles.testFormError}>{ testFormError }</Text>
        </View>
      )
    }
    
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20
  },
  testFormError: {
    color: '#f00',
    textAlign: 'center',
    fontSize: 16,
    paddingTop: 20
  }
});
