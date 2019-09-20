import React, { Component } from 'react'
import { Button, Avatar } from 'react-native-elements'
import { StyleSheet, Text, View } from 'react-native'
import * as firebase from 'firebase'
import UpdateUserInfo from './UpdateUserInfo'

export default class UserInfo extends Component{
    constructor(props){
        super(props)
        this.state={
            ...props,
            userInfo: {}
        }
    }

    componentDidMount = async () => {
        await this.getUserInfo()
        // console.log(this.state)
    }

    getUserInfo = () => {
        const currentUser = firebase.auth().currentUser
        // const { displayName, email, photoURL, uid } = currentUser

        this.setState({
            userInfo: {
                displayName: currentUser.displayName,
                email: currentUser.email,
                photoURL: currentUser.photoURL,
                uid: currentUser.uid
              }
        })
        // console.log(this.state)
        // user.providerData.forEach( userInfo => {
        //     console.log(userInfo)
        // })
    }

    checkUserAvatar = (photoURL) => {
        return photoURL ? photoURL : 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
    } 

    updateUserDisplayName = async (newDisplayName) => {
        const update = {
            displayName: newDisplayName
        }

        await firebase.auth().currentUser.updateProfile(update)
        this.getUserInfo()
    }

    returnUpdateUserInfoComponent = userInfoData => {
        if (userInfoData.hasOwnProperty('uid')) {
            console.log('Entra a esta funcion')
            return( <UpdateUserInfo 
                        userInfo={ this.state.userInfo } 
                        updateUserDisplayName={ this.updateUserDisplayName }
                    />
                    )
        }
        // console.log(userInfoData)
    }

    render(){
        const { displayName, email, photoURL } = this.state.userInfo

        this.checkUserAvatar(photoURL)
        return(
            <View>
                <View style={ styles.viewUserInfo }>
                    <Avatar
                        rounded
                        size='large'
                        source={{
                            uri: this.checkUserAvatar(photoURL)
                        }}
                        containerStyles={ styles.userInfoAvatar }
                    />
                    <View>
                        <Text style={ styles.displayName }>{ displayName }</Text>
                        <Text style={ styles.displayEmail }>{ email }</Text>
                    </View>
                </View>
                {this.returnUpdateUserInfoComponent(this.state.userInfo)}
            </View>
        )
    }

}

const styles = StyleSheet.create({
    viewUserInfo: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      paddingTop: 30,
      paddingBottom: 30,
      backgroundColor: '#f2f2f2'
    },
    userInfoAvatar: {
        marginRight: 20
    },
    displayName: {
        paddingLeft: 25,
        fontWeight: 'bold'
    },
    displayEmail: {
        paddingLeft: 25
    }
    
  });