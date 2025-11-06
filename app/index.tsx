import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
export default function Index() {
  const [enteredGoalText, setEntededGoalText] = useState('');

  function goalInputHandler(enteredText: string): void {
    setEntededGoalText(enteredText);
  }

  function addGoalHandler() {
    console.log(enteredGoalText)
  }
  return (
    <View style={ styles.appContainer }>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Your course goal!" 
          style={ styles.textInput } onChangeText={goalInputHandler}/>
        <Button title="Add Goal" onPress={addGoalHandler}/>
      </View>
      <View style={ styles.goalsContainer}>
          <Text>
            List of goals...
          </Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    padding: 6
  },
  goalsContainer: {
    flex: 5
  }
})