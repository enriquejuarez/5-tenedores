import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListItem } from 'react-native-elements'


export default class UpdateUserInfo extends Component{
    constructor(){
        super()
        this.state ={
            menuItems: {
                title: 'Cmbiar nombre',
                iconType: 'material-community',
                iconNameRight: 'chevron-right',
                iconColorRight: '#ccc',
                iconName: 'account-circle',
                iconColor: '#ccc',
                onPress: () => {
                    console.log('Haz realizado clic en cambiar nombre y apellidos')
                }
                
            }
        }
    }
    render(){

        return(
            <View style={ styles.viewUpdateUserInfo }>
                <Text>Update data usersss</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    viewUpdateUserInfo: {
    }
});