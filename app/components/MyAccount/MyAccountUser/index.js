import React, { Component } from 'react'
import { Button, } from 'react-native-elements'
import { StyleSheet, Text, View } from 'react-native'
import UserInfo from './UserInfo'


export default class MyAccountUser extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View>
                <UserInfo />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
});
