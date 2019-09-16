import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import * as firebase from 'firebase'
import MyAccountGuest from '../../components/MyAccountGuest'
import MyAccountUser from '../../components/MyAccountUser'

export default class MyAccount extends Component{

    constructor(){
        super()
        this.state= {
            login: false
        }
    }

    async componentDidMount() {
        await firebase.auth().onAuthStateChanged(user => {
            if(user){
                this.setState({
                    login:true
                })
            }else{
                this.setState({
                    login:false
                })
            }
        })
    }
    goToScreen = nameScreen => {
        this.props.navigation.navigate(nameScreen)
    }

    logout = () => {
        firebase.auth().signOut()
    }

    render(){
        const { login } = this.state

        if (login) {
            return(
               
                <MyAccountUser 
                /> 
                // <View style={styles.body}>
                //     <Text>Estas logueado bien!!</Text>
                //     <Button 
                //         title='Cerrar sesión'
                //         onPress={() => this.logout()}
                //     />
                // </View>
            
            )
        }else{
            return(
                <MyAccountGuest 
                   goToScreen={ this.goToScreen } 
                />
                // <View style={styles.body}>
                //     <Text>MyAccount Screen</Text>
                //     <Button 
                //         title='Registro'
                //         onPress={() => this.goToScreen('Register')}
                //     />
                //     <Button 
                //         title='Login'
                //         onPress={() => this.goToScreen('Login')}
                //     />
                // </View>
            )
        }
        
    }
}


const styles = StyleSheet.create({
    body: {
      flex:1,
      alignItems: 'center',
      backgroundColor: '#fff',
      justifyContent: 'center'
    }
  });
