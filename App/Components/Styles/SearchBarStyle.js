import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  applicationView: {
    flex: 1
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    maxHeight: 55,
    marginHorizontal: 10,
    borderRadius: 5,
    paddingHorizontal: 10,
    shadowColor: "#1B407E",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 1,


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
  input: {
    textAlign: 'left',
    color: 'grey',
    fontSize: 18,
  },

  calender: {

  }



})
