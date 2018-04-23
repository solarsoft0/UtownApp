import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/RoundedLabelButtonStyle'
export default class RoundedLabelButton extends Component {



  
  constructor(props) {
    super(props);

    const color = props.color || 'white';
    const bgColor = props.bgColor || 'transparent'
    const containerStyle = props.style || null
    const style = props.style || null
    const customSize = props.customSize || null


    let customStyle = [style,
      {
        color: color,
        fontSize: customSize,
        fontWeight:'bold'
      }
    ]
    let containerCustomStyle = [containerStyle,
      {
        backgroundColor: bgColor,
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
    removeEmpty(containerCustomStyle)

    this.state = { 
      customStyle,
      containerCustomStyle
    };

  }


  getText() {
    const Text = this.props.text || this.props.children || ''
    return Text
  }

  render() {

    return (
      <View style={[styles.container, this.state.containerCustomStyle, this.props.size == "big" ? styles.bigContainer : "" ]}>
        <Text style={[styles.defaultText, this.state.customStyle]}>{this.getText()}</Text>
      </View>
    )
  }
}
