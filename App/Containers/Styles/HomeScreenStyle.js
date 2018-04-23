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
  },
  backgroundImage:{
    backgroundColor: '#ccc',
  flex: 1,
  resizeMode: 'cover',
  position: 'absolute',
  width: '100%',
  height: '120%',
  justifyContent: 'center',
}

})
