import React, { Component } from 'react'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import { Icon } from 'react-native-elements'


//screens
import HomeScreen from '../screens/Home'
import TopFiveScreen from '../screens/TopFive'
import MyAccountScreen from '../screens/MyAccount/MyAccount'
import SearchScreen from '../screens/Search'
import RegisterScreen from '../screens/MyAccount/Register'


const homeScreenStack = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions:({navigation}) => ({
            title: 'Home'
        }),
    }
})

const topFiveScreenStack = createStackNavigator({
    TopFive: {
        screen: TopFiveScreen,
        navigationOptions:({navigation}) => ({
            title: 'Top 5 restaurantes'
        })
    }
})

const searchScreenStack = createStackNavigator({
    Search: {
        screen: SearchScreen,
        navigationOptions:({navigation}) => ({
            title: 'Buscar'
        })
    }
})

const myAccountScreenStack = createStackNavigator({
    MyAccount: {
        screen: MyAccountScreen,
        navigationOptions:({navigation}) => ({
            title: 'Mi cuenta'
        })
    },
    Register: {
        screen: RegisterScreen,
        navigationOptions:({navigation}) => ({
            title: 'Registro'
        })
    }
})


const RootStack = createBottomTabNavigator({
    Home: {
        screen: homeScreenStack,
        navigationOptions: ({navigation}) => ({
            tabBarLabel: 'Inicio',
            tabBarIcon: ({tintColor}) => (
                <Icon 
                    tye='font-awesome'
                    name='ac-unit'
                    size={22}
                    color={tintColor}
                />
            )
        })
    },
    TopFive: {
        screen: topFiveScreenStack,
        navigationOptions: ({navigation}) => ({
            tabBarLabel: 'Top 5',
            tabBarIcon: ({tintColor}) => (
                <Icon 
                    tye='material-community'
                    name='star'
                    size={22}
                    color={tintColor}
                />
            )
        })
    },
    Search: {
        screen: searchScreenStack,
        navigationOptions: ({navigation}) => ({
            tabBarLabel: 'Buscar',
            tabBarIcon: ({tintColor}) => (
                <Icon 
                    tye='font-awesome'
                    name='search'
                    size={22}
                    color={tintColor}
                />
            )
        })
    },
    MyAccount: {
        screen: myAccountScreenStack,
        navigationOptions: ({navigation}) => ({
            tabBarLabel: 'Mi cuenta',
            tabBarIcon: ({tintColor}) => (
                <Icon 
                    tye='font-awesome'
                    name='home'
                    size={22}
                    color={tintColor}
                />
            )
        })
    }
},
{   initialRouteName: 'MyAccount',
    order: ['Home', 'TopFive', 'Search', 'MyAccount'],
    tabBarOptions:{
        inactiveTintColor: '#646464',
        activeTintColor: '#00a680'
    }
})

export default createAppContainer(RootStack)

