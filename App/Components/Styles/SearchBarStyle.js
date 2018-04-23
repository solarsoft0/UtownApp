import { StyleSheet } from 'react-native'
import { Colors } from '../../Themes';

export default StyleSheet.create({
  applicationView: {
    flex: 1
  },

  wrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    marginHorizontal: 10,
    borderRadius: 5,
    paddingHorizontal: 10,
    shadowColor: "#1B407E",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 1,
  },

  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    maxHeight: 55,
    


  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
flex: 2
  },


  myImage: {
    width: 200,
    height: 200,
    alignSelf: 'center'
  },
  icon: {
    height: 30,
    width: 30,
    resizeMode: "contain",
  },


  inputContainer: {
    flex: 2,
    marginHorizontal: 10,
  },
  calenderText : {
fontSize:16,
fontWeight: 'bold',
color: Colors.deepAsh
  },
  input: {
    textAlign: 'left',
    color: 'grey',
    fontSize: 18,
  },

  calender: {

  }



})
