import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, View, Image } from 'react-native'
import { connect } from 'react-redux'
import {Colors, Images}  from '../Themes'
//Components
import SearchBar from '../Components/SearchBar';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import RoundedLabelButton from '../Components/RoundedLabelButton'
// Styles
import styles from './Styles/HomeScreenStyle'

class HomeScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showCalender: true
    }
  }

  
  static navigationOptions = {
    drawerLabel: 'Screen One',
    drawerIcon: () => (
      <Image
        source={{ uri: `https://dummyimage.com/60x60/000/fff.jpg&text=1` }}
        style={{ width: 30, height: 30, borderRadius: 15 }}
      />
    )
  }

  handleShowCalender = () => {
    alert(2)
    this.setState(previousState => {
      return { showCalender: !previousState.showCalender }
    })
  }


  
  render () {
    const {navigate} = this.props.navigation
    return (
      <View style={styles.container}>
        <Image
          style={styles.backgroundImage}
          source={Images.map}
        />
        <SearchBar leftAction={ () =>
          navigate('DrawerToggle')} showCalender={this.state.showCalender} rightAction={this.handleShowCalender} />
        <View style={styles.body}></View>

        <View style={styles.footer}>
        <View style={styles.labelGroup}>
          <RoundedLabelButton bgColor="#50AE4A">7 Posts</RoundedLabelButton>
          <RoundedLabelButton bgColor="#1A65B2">16 Events</RoundedLabelButton>
          <RoundedLabelButton bgColor="#F1823B">11 Deals</RoundedLabelButton>
        </View>
        <ScrollView style={styles.footerLabelGroup}
        horizontal>
          <RoundedLabelButton bgColor="#F8FBF9" color={Colors.deepAsh} size="big">Downtown</RoundedLabelButton>
          <RoundedLabelButton bgColor="#F8FBF9" color={Colors.deepAsh} size="big">Downtown</RoundedLabelButton>
          <RoundedLabelButton bgColor="#F8FBF9" color={Colors.deepAsh} size="big">Downtown</RoundedLabelButton>
        </ScrollView>
        </View>


      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
