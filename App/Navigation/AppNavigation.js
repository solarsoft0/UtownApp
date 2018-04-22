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
    contentComponent: DrawerContainer

  }

)

const DrawerNavigation = StackNavigator({
  DrawerStack: { screen: DrawerStack }
}, {
    headerMode: 'float',
    navigationOptions: ({ navigation }) => ({
      headerStyle: { backgroundColor: '#4C3E54' },
      title: 'Welcome!',
      headerTintColor: 'white',
      headerLeft: <Text onPress={() =>
        navigation.navigate('DrawerToggle')}>Menu</Text>
    })
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
