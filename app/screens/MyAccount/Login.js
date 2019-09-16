import React, { Component } from 'react'
import { StyleSheet, Text, View, ActivityIndicator, ScrollView } from 'react-native'
import { Image, Button,  SocialIcon, Divider} from 'react-native-elements'
import t from 'tcomb-form-native'
import { LoginStruct, LoginOptions } from '../../forms/Login'
import * as firebase from 'firebase'
import Toast, { DURATION } from 'react-native-easy-toast'
import FacebookApi from '../../utils/Social'
import * as Facebook from "expo-facebook"



const Form = t.form.Form

export default class Login extends Component{
    constructor(){
        super()
        this.state={
            loginStruct: LoginStruct,
            loginOptions: LoginOptions,
            loginData:{
                email: '',
                password: ''
            },
            loginErrorMessage: ''
        }
    }

    login = () => {
        const validate = this.refs.loginForm.getValue()
        if(!validate){
            this.setState({
                loginErrorMessage: 'Error de acceso'
            })
        }else{
            this.setState({
                loginErrorMessage: ''
            })
            firebase
            .auth()
            .signInWithEmailAndPassword(validate.email, validate.password)
            .then(() => {
                this.refs.toastLogin.show('Login correcto', 2500, () => {
                    this.props.navigation.goBack()
                })
            })
            .catch((error) => {
                console.log('Login incorrecto')
                // const errorCode = error.code Por seguridad no coloca estas validaciones
                // if (errorCode === 'auth/wrong-password'){

                // }
                // if (errorCode === 'auth/user-not-found'){
                    
                // }
                this.refs.toastLogin.show('Login incorrecto', 2500)
            })
        }
    }

    loginFacebook = async () => {
        const { type, token } = await Facebook.logInWithReadPermissionsAsync(FacebookApi.application_id, { permissions: FacebookApi.permissions });
       
          if (type == "success") {
            const credentials = firebase.auth.FacebookAuthProvider.credential(token);
            firebase
              .auth()
              .signInWithCredential(credentials)
              .then(() => {
                console.log('Login correcto');
                this.props.navigation.goBack();
              })
              .catch(err => {
                console.log('Erro accediendo con Facebook, intentelo mas tarde');
              });
          } else if (type == "cancel") {
            console.log('Inicio de sesion cancelad');
          } else {
            console.log('Erro desconocido, intentelo mas tarde');
          }

    }
    onChangeFormLogin = (formValue) => {
        this.setState({
            loginData: formValue
        })
    }

    render(){

        const { loginStruct, loginOptions, loginErrorMessage } = this.state
        return(
            <ScrollView>
            <View style={ styles.viewBody }>
                <Image
                    source={require('../../../assets/img/5-tenedores-letras-icono-logo.png')}
                    style={styles.logo}
                    PlaceholderContent={<ActivityIndicator />}
                    resizeMode='contain'
                    containerStyle={ styles.containerLogo }
                />
                <View style={ styles.viewForm }>
                    <Form
                        ref='loginForm'
                        type= { loginStruct }
                        options= { loginOptions }
                        value={ this.state.loginData }
                        onChange={ (value) => this.onChangeFormLogin(value) }
                    />
                    <Button
                    buttonStyle={ styles.buttonLoginContainer } 
                    title='Login'
                    onPress={ () => this.login() }
                    />
                    <Text style={ styles.textRegister }>
                        ¿Aún no tienes una cuenta? <Text 
                                                        style={ styles.btnRegister }
                                                        onPress= { () => this.props.navigation.navigate('Register') }
                                                    >
                                                    Regístrate
                                                    </Text>
                    </Text>
                    <Text style={ styles.loginErrorMessage }>{ loginErrorMessage }</Text>
                    <Divider style={styles.divider} />
                    <SocialIcon 
                        title='Iniciar con Facebook'
                        button
                        type='facebook'
                        onPress={ () => this.loginFacebook() }
                        style={ styles.btnFacebook }
                    />
                </View>
                <Toast 
                    ref='toastLogin'
                    position= 'bottom'
                    positionValue={250}
                    fineInDuration={1000}
                    fineOuDuration={1000}
                    opacity={0.8}
                    textStyle={{ color: '#fff'}}
                />
            </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    viewBody: {
      flex: 1,
      marginLeft: 30,
      marginRight: 30,
      marginTop: 40,
    },
    logo:{
        width: 300,
        height: 150,
    },
    viewForm:{
        marginTop: 50
    },
    buttonLoginContainer:{
        backgroundColor: '#00a688',
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10
    },
    containerLogo:{
        alignItems: 'center'
    },
    loginErrorMessage:{
        color: '#f00',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20

    },
    divider: {
        backgroundColor: '#00a688',
        marginBottom: 20
    },
    textRegister: {
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10
    },
    btnRegister: {
        color: '#00a680',
        fontWeight: 'bold'
    },
    btnFacebook: {
        marginBottom: 40
    }
  });
