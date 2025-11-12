import { StyleSheet } from 'react-native';

function Stylesheet() {
  return (
    StyleSheet.create({
      appContainer: {
        paddingTop: 50,
        paddingHorizontal: 16,
        flex: 1
      },
      inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        width: '70%',
        padding: 8,
        marginRight: 8
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
      }
    })
  )
}

export default Stylesheet;