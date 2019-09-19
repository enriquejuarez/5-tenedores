import React, { Component } from 'react'
import { Button, Avatar } from 'react-native-elements'
import { StyleSheet, Text, View } from 'react-native'
import * as firebase from 'firebase'
import UpdateUserInfo from './UpdateUserInfo'

export default class UserInfo extends Component{
    constructor(state){
        super(state)
        this.state={
            userInfo: {
                // displayName: '',
                // email: '',
                // photoUrl: '',
                // uid: ''
            }
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
        // user.providerData.forEach( userInfo => {
        //     console.log(userInfo)
        // })
    }

    checkUserAvatar = (photoURL) => {
        return photoURL ? photoURL : 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
    } 

    updateUserDisplayName = (newDisplayName) => {
        console.log(newDisplayName)
    }

    returnUpdateUserInfoComponent = userInfoData => {
        if (userInfoData.hasOwnProperty('uid')) {
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
                    <Text style={ styles.displayName }>{ displayName }</Text>
                    <Text>{ email }</Text>
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
        
    }
    
  });