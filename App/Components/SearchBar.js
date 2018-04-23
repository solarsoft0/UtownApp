import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import { Images } from '../Themes'
import styles from './Styles/SearchBarStyle'
import { NavigationActions } from 'react-navigation'


export default class SearchBar extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }
  constructor (props) {
      super(props)
  }

 



  render () {
      const { navigation } = this.props

        return (
            
            <View style={styles.container}>
                <TouchableOpacity onPress={this.props.leftAction}      
 style={styles.menuIcon}><Image source={Images.menu} style={styles.icon}/></TouchableOpacity>
                <View style={styles.inputContainer}><TextInput placeholder='Search Local' style= {styles.input} /></View>
                <TouchableOpacity onPress={this.props.rightAction} style={styles.menuIcon}><Image source={Images.calender} style={styles.icon} /></TouchableOpacity> 
            </View>
        )
      }
}
