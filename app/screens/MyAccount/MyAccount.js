import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'

export default class MyAccount extends Component{

    goToScreen = nameScreen => {
        this.props.navigation.navigate(nameScreen)
    }

    render(){
        return(
            <View style={styles.body}>
                <Text>MyAccount Screen</Text>
                <Button 
                    title='Registro'
                    onPress={() => this.goToScreen('Register')}
                ></Button>
            </View>
        )
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
