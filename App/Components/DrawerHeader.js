import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View,Image } from 'react-native'
import {Images }  from '../Themes'
import styles from './Styles/DrawerHeaderStyle'

export default class DrawerHeader extends Component {
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

  render () {
    return (
      <View style={styles.container}>
      <Image style={styles.headerLogo} source={Images.logo} />
      </View>
    )
  }
}
