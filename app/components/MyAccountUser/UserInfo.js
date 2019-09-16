import React, { Component } from 'react'
import { Button, Avatar } from 'react-native-elements'
import { StyleSheet, Text, View } from 'react-native'
import * as firebase from 'firebase'

export default class UserInfo extends Component{
    constructor(state){
        super(state)
    }

    componentDidMount = () => {
        this.getUserInfo()
    }

    getUserInfo = () => {
        const user = firebase.auth().currentUser
        console.log(user)
        user.providerData.forEach( userInfo => {
            console.log(userInfo)
        })
    }

    render(){
        return(
            <View style={ styles.viewUserInfo }>
                <Text>
                    Info de cuenta
                </Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    viewUserInfo: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 30,
      marginRight: 30
    },
    
  });