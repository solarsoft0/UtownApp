import { StackNavigator, DrawerNavigator } from 'react-navigation'
import DrawerContainer from '../Containers/DrawerContainer'
import HomeScreen from '../Containers/HomeScreen'
import React from 'react'
import { Text, Animated, Easing } from 'react-native'
import styles from './Styles/NavigationStyles'


const noTransitionConfig = () => ({
  transitionSpec: {
    duration: 0,
    timing: Animated.timing,
    easing: Easing.step0
  }
})


const DrawerStack = DrawerNavigator({
  HomeScreen: { screen: HomeScreen },
},
  {
    initialRouteName: "HomeScreen",
    contentComponent: DrawerContainer,
    drawerWidth:320

  }

)

const DrawerNavigation = StackNavigator({
  DrawerStack: { screen: DrawerStack }
}, {
    headerMode: 'none',
  
  })


// Manifest of possible screens
const PrimaryNav = StackNavigator({
  //orther stack might come here eg auth
  drawerStack: { screen: DrawerNavigation }
}, {
    // Default config for all screens
    headerMode: 'none',
    title: 'Main',
    initialRouteName: 'drawerStack',
    transitionConfig: noTransitionConfig
  })

export default PrimaryNav
