import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,

  container: {
    flex:1,
    paddingTop:40,
    paddingBottom: 20,
    backgroundColor: 'red',
    justifyContent: 'space-between'
  },
  labelGroup: {
    maxHeight:50,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  footerLabelGroup:  {
    maxHeight: 40,
  }
})
