import React, { Component } from 'react'
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import { Image, Button,  SocialIcon} from 'react-native-elements'


export default class MyAccountGuest extends Component{

    constructor(props){
        super(props)
        // console.log(props)
    }

    render(){
        const { goToScreen } = this.props 
        return(
            <View style={ styles.viewBody }>
                <Image
                    source={require("../../../assets/img/image-my-account-guest-01.jpg")}
                    // style={ styles.image }
                    PlaceholderContent={ <ActivityIndicator />}
                    resizeMode='contain' 
                    containerStyle={ styles.image }
                />
                <Text style={ styles.title }>Consulta tu perfil de 5 tenedores</Text>
                <Text style={ styles.description }>
                    ¿Cómo describirias tu mejor restaurante? Busca y visualiza los mejores restaurantes de una
                    forma sencilla, vota cual te ha gustado mas y comenta cual ha sido tu experiencia
                </Text>
                <Button 
                    buttonStyle={ styles.btnViewProfile }
                    title='Ver tu perfil'
                    onPress={() => goToScreen('Login')}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    viewBody: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingRight: 30,
      paddingLeft: 30
    },
    image: {
        height: 300,
        width: 300,
        marginBottom: 40
    },
    title: {
        fontWeight: 'bold',
        fontSize: 19,
        marginBottom: 10
    },
    description: {
        textAlign: 'center',
        marginBottom: 20
    },
    btnViewProfile: {
        backgroundColor: '#00a680',
        width: 180
    }
  });