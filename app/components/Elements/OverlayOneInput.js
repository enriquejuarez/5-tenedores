import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Overlay, Input, Button } from 'react-native-elements'

export default class OverlayOneInput extends Component{

    constructor(){
        super()
    }
    render(){

        return(
            <Overlay isVisible={ false } overlayBackgroundColor='transparent' overlayStyle={ styles.overlayStyle }> 
                <View style={ styles.viewOverlay }>
                    <Input 
                        containerStyle={ styles.inputContainer } 
                        placeholder='texto...'
                        onChangeText={ value => console.log(value) }
                        value=''
                    />
                    <Button 
                        title='Actualizar'
                        buttonStyle={ styles.bottonUpdate }
                    />
                </View>
            </Overlay>
        )
    }
}

const styles = StyleSheet.create({
    overlayStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    viewOverlay: {
        width: 300,
        backgroundColor: '#fff',
        padding: 20,
        borderColor: '#00a680',
        borderRightWidth: 2,
        borderLeftWidth: 2,
        borderBottomWidth: 2, 
        borderTopWidth: 2
    },
    inputContainer:{
        marginBottom: 20
    },
    bottonUpdate: {
        backgroundColor: '#00a680'
    }
});