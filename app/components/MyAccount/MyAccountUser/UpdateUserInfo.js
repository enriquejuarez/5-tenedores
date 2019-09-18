import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListItem } from 'react-native-elements'
import OverlayOneInput from '../../Elements/OverlayOneInput'


export default class UpdateUserInfo extends Component{
    constructor(){
        super()
        this.state ={
            menuItems: [
                {
                    title: 'Cambiar nombre y apellido',
                    iconType: 'material-community',
                    iconNameRight: 'chevron-right',
                    iconColorRight: '#ccc',
                    iconNameLeft: 'account-circle',
                    iconColorLeft: '#ccc',
                    onPress: () => {
                        console.log('Haz realizado clic en cambiar nombre y apellidos')
                    }
                },
                {
                    title: 'Cambiar email',
                    iconType: 'material-community',
                    iconNameRight: 'chevron-right',
                    iconColorRight: '#ccc',
                    iconNameLeft: 'at',
                    iconColorLeft: '#ccc',
                    onPress: () => {
                        console.log('Haz clic en cambiar email')
                    }
                },
                {
                    title: 'Cambiar email',
                    iconType: 'material-community',
                    iconNameRight: 'chevron-right',
                    iconColorRight: '#ccc',
                    iconNameLeft: 'lock-reset',
                    iconColorLeft: '#ccc',
                    onPress: () => {
                        console.log('Haz clic en cambiar contraseña')
                    }
                }
            ]
        }
    }
    render(){
        const { menuItems } = this.state

        return(
            <View style={ styles.viewUpdateUserInfo }>
                {
                    menuItems.map((item, index) => (
                        <ListItem 
                            key={ index }
                            title={ item.title }
                            leftIcon={{ type: item.iconType, name: item.iconNameLeft, color: item.iconColorLeft }}
                            rightIcon={{ type: item.iconType, name: item.iconNameRight, color: item.iconColorRight }}
                            onPress={ item. onPress }
                            containerStyle={ styles.containerStyle }
                        />
                    ))
                }
                <OverlayOneInput />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    viewUpdateUserInfo: {
    },
    containerStyle: {
        borderBottomWidth: 1,
        borderBottomColor: '#e3e3e3'
    }
});