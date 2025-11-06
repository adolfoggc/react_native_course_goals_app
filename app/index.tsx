import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
export default function Index() {
  const [enteredGoalText, setEntededGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState<string[]>([]);

  function goalInputHandler(enteredText: string): void {
    setEntededGoalText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals(
      (currentCourseGoals) => [...currentCourseGoals, enteredGoalText]);
    setEntededGoalText('');
  }
  return (
    <View style={ styles.appContainer }>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Your course goal!" 
          style={ styles.textInput } 
          onChangeText={goalInputHandler}
          value={enteredGoalText} />
        <Button title="Add Goal" onPress={addGoalHandler}/>
      </View>
      <View style={ styles.goalsContainer}>
          { courseGoals.map((goal) => (
            //To Avoid IOS issue, we're passing the stile to a View to show border radius
            <View style={styles.goalItem} key={goal}> 
              <Text style={styles.goalText}>
                {goal}
              </Text>  
            </View>
          ))}
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
    padding: 8,
    marginRight: 8
  },
  goalsContainer: {
    flex: 5
  },
  goalItem: {
    margin: 8,
    borderRadius: 6,
    padding: 8,
    backgroundColor: '#5e0acc',
    color: '#fff'
  }, 
  goalText: {
    color: "#fff"
  }
})