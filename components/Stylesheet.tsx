import { StyleSheet } from 'react-native';

function Stylesheet() {
  //strangely, defining the color on app.json does not work, so I defined it on appContainer
  return (
    StyleSheet.create({
      appContainer: {
        paddingTop: 50,
        paddingHorizontal: 16,
        flex: 1,
        backgroundColor: '#1e085a'
      },
      inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b'
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        width: '100%',
        padding: 16
      },
      goalsContainer: {
        flex: 5
      },
      goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        color: '#fff'
      }, 
      goalText: {
        color: "#fff",
        padding: 8
      },
      buttonContainer: {
        marginTop: 16,
        flexDirection: 'row'
      },
      button: {
        width: 100,
        marginHorizontal: 8
      },
      image: {
        width: 100,
        height: 100,
        margin: 20
      }
    })
  )
}

export default Stylesheet;