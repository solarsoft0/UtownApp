import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native'
import { NavigationActions } from 'react-navigation'
import DrawerHeader from '../Components/DrawerHeader'
import DrawerTab from '../Components/DrawerTab'
import DrawerSectionTitle from '../Components/DrawerSectionTitle'
import {Images, Colors, images }  from '../Themes'
import styles from './Styles/DrawerContainerStyle'
export default class DrawerContainer extends React.Component {

  constructor (props) {
super(props)
this.state = {
showSpecial: true
}

  }


  handleShowSpecial = () => {
    this.setState(previousState => {
      return { showSpecial: !previousState.showSpecial }
    })
  }
  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
<DrawerHeader />

<ScrollView>
  <View style={styles.tabWrapper} >
          <DrawerTab icon={Images.user} title="Your Profile"/>
          <DrawerTab icon={Images.notification} title="Notification"/>
          <DrawerTab icon={Images.favorite} title="Favorites"/>
          </View>
<View style={styles.tabWrapper}>
            <DrawerSectionTitle title={"Special Maps Near You"} onPress={this.handleShowSpecial} icon={this.state.showSpecial ? Images.arrowUp : Images.arrowDown} />
         { this.state.showSpecial && <View>
            <DrawerTab avatar={Images.avatar} subTitle="May 1-3"  title="Hop Jam Fest"/>
            <DrawerTab avatar={Images.avatar} title="Visit Tulsa's Must See Attractions"/>
        </View>}
        </View>
          <View style={styles.tabWrapper} >
            <DrawerTab icon={Images.feedback} title="Send Us Feedback"/>
          </View>
          <View style={styles.tabWrapper} >
            <DrawerTab  title="Settings" />
            <DrawerTab  title="Privacy Policy" />
            <DrawerTab  title="Terms of Service" />
            <DrawerTab  title="Log Out" style={{color:Colors.blue}} />
          </View>
    

</ScrollView>
      </View>
    )
  }
}

