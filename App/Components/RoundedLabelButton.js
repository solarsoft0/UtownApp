import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/RoundedLabelButtonStyle'
export default class RoundedLabelButton extends Component {



  
  constructor(props) {
    super(props);

    const color = props.color || 'red';
    const bgColor = props.bgColor || 'transparent'
    const style = props.style || null
    const customSize = props.customSize || null
    let font = '';




    let customStyle = [font, style,
      {
        color: color,
        fontSize: customSize
      }
    ]

    // remove null atribute 

    const removeEmpty = (obj) => {
      Object.keys(obj).forEach(key => {
        if (obj[key] && typeof obj[key] === 'object') removeEmpty(obj[key]);
        else if (obj[key] == null) delete obj[key];
      });
    };

    removeEmpty(customStyle)

    this.state = { customStyle: customStyle };

  }


  getText() {
    const Text = this.props.text || this.props.children || ''
    return Text
  }

  render() {

    return (
      <Text style={this.state.customStyle}>{this.getText()}</Text>
    )
  }
}
