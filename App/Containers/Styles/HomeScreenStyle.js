import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,

  container: {
    flex:1,
    paddingTop:40,
    backgroundColor: 'red',
    justifyContent: 'space-between'
  },
  body: {
flex:2
  },
  footer: {
  },
  labelGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footerLabelGroup:  {
    marginVertical:15
  }
})
