import { StyleSheet } from 'react-native'
import {Colors } from '../../Themes'
export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  iconContainer: {
    paddingRight: 15
  },
  titleContainer: {
    alignSelf: 'center'
  },
  title: {
    fontSize: 18,
    color: Colors.deepAsh
  },
  subTitle: {
    color: Colors.deepAsh,
    fontSize: 14,
    fontStyle: 'italic'
  },
  avatar: {
width:35,
height:35,
borderRadius: 20
  },
  

})
