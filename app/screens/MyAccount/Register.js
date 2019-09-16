import React, { Component } from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'
import t from 'tcomb-form-native'
import { RegisterStruct, RegisterOptions } from '../../forms/Register'
import { Button, Text, Image } from 'react-native-elements'
import * as firebase from 'firebase'
import Toast, { DURATION } from 'react-native-easy-toast'

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
            },
            formErrorMessage: ''
        }
    }

    register = () => {

        const { password, passwordConfirmation } = this.state.formData
        console.log(this.state.formData)
        if (password === passwordConfirmation){
            const validate = this.refs.registerForm.getValue() //Realiza las validaciones del formulario
            if (validate){
                this.setState({
                    formErrorMessage: ''
                })
                firebase.auth().createUserWithEmailAndPassword(validate.email, validate.password)
                .then(resolve => {
                    this.refs.toast.show('Registro correcto!', 300, () => {
                        this.props.navigation.navigate('MyAccount')
                        // this.props.navigation.goBack()
                    });
                    console.log('Registro correcto')
                })
                .catch(err => {
                    console.log('Error en el registro')
                })
            }else{
                this.setState({
                    formErrorMessage: 'Formulario inválido'
                })
            }
        }else{
            this.setState({
                formErrorMessage: 'Las contraseñas no son iguales'
            })
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
        const { registerStruct, registerOptions, formErrorMessage } = this.state

        return(
            <View style={styles.body}>
                <Image
                    source={require('../../../assets/img/5-tenedores-letras-icono-logo.png')}
                    style={styles.logo}
                    PlaceholderContent={<ActivityIndicator />}
                    resizeMode='contain'
                    containerStyle={ styles.containerLogo }
                />
                <Form 
                    ref='registerForm' 
                    type={ registerStruct } 
                    options= { registerOptions } 
                    value= { this.state.formData }
                    onChange= { (formValue) => this.onChangeFormRegister(formValue) }
                />
                <Button 
                    buttonStyle={ styles.buttonRegisterContainer }
                    title='Unirse'
                    onPress={ () => this.register() }
                />
                <Text style={styles.formErrorMessage}>{formErrorMessage}</Text>
                <Toast
                    ref="toast"
                    position='bottom'
                    positionValue={250}
                    fadeInDuration={1000}
                    fadeOutDuration={1000}
                    opacity={0.8}
                    textStyle={{color:'#fff'}}
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
    },
    buttonRegisterContainer: {
        backgroundColor: '#00a680',
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10
    },
    formErrorMessage: {
        color: '#f00',
        textAlign: 'center',
        marginTop: 30
    },
    containerLogo:{
        alignItems: 'center',
        marginBottom: 30
    },
    logo:{
        width: 300,
        height: 150,
    }
  });
