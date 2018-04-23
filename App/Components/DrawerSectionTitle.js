import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity} from 'react-native'
import styles from './Styles/DrawerSectionTitleStyle'

export default class DrawerSectionTitle extends Component {
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
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        <Text style={styles.title}>{this.props.title}</Text>
     <Image source={this.props.icon} />
      </TouchableOpacity>
    )
  }
}
