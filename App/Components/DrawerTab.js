import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity} from 'react-native'
import styles from './Styles/DrawerTabStyle'
import {Images } from '../Themes'
export default class DrawerTab extends Component {
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
    { (this.props.avatar || this.props.icon) &&  <View style={styles.iconContainer}>
<Image source={this.props.icon || this.props.avatar || Images.menu} style={this.props.avatar && styles.avatar} />
      </View> }
      <View style={styles.titleContainer}>
          <Text style={[styles.title,this.props.style]}>{this.props.title}</Text>
          {this.props.subTitle && <Text style={styles.subTitle}>{this.props.subTitle}</Text> }
      </View>
      </TouchableOpacity>
    )
  }
}
