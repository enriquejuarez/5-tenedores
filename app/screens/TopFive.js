import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'



export default class TopFive extends Component{

    render(){
        return(
            <View style={styles.body}>
                <Text>TopFive Screen</Text>
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
