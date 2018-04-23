import { StyleSheet } from 'react-native'
import {Colors } from '../../Themes'
export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent:'space-between',
    paddingVertical: 15,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    paddingLeft: 20,
    color: Colors.deepAsh

  }
})
