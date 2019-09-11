import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import t from 'tcomb-form-native'
import { RegisterStruct, RegisterOptions } from '../../forms/Register'
import { Button } from 'react-native-elements'

const Form = t.form.Form

export default class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
            registerStruct: RegisterStruct,
            registerOptions:  RegisterOptions,
            formData: {
                name: '',
                email: '',
                password: '',
                passwordConfirmation: ''
            }
        }
    }

    register = () => {
        const { password, passwordConfirmation } = this.state.formData
        if (password === passwordConfirmation){
            const validate = this.refs.registerForm.getValue() //Realiza las validaciones del formulario
            if (validate){
                console.log('formulario valido')
            }else{
                console.log('formulario no valido')
            }
        }else{
            console.log('Las contraseñas no son iguales')
        }
        
    }

    onChangeFormRegister = (formValue) => {
        console.log(formValue)
        this.setState({
            formData: formValue,
            //Se registra el formulario en la misma linea
        })
    }

    render(){
        const { registerStruct, registerOptions } = this.state

        return(
            <View style={styles.body}>
                <Form 
                    ref='registerForm' 
                    type={ registerStruct } 
                    options= { registerOptions } 
                    value= { this.state.formData }
                    onChange= { (formValue) => this.onChangeFormRegister(formValue) }
                />
                <Button 
                    title='Unirse'
                    onPress={ () => this.register() }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    body: {
      flex:1,
      justifyContent: 'center',
      marginLeft: 40,
      marginRight: 40
    }
  });
