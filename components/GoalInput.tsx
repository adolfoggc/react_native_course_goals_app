import { useState } from 'react';
import { Button, Image, Modal, TextInput, View } from 'react-native';
import Stylesheet from '../components/Stylesheet';

function GoalInput( props: propsInterface ){
  const styles = Stylesheet();
  const [enteredGoalText, setEntededGoalText] = useState('');

  function goalInputHandler(enteredText: string): void {
    setEntededGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEntededGoalText('');
    props.onCancel();
  }

  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image source={require('../assets/images/goal.png')} style={styles.image}/>
        <TextInput placeholder="Your course goal!" 
          style={ styles.textInput } 
          onChangeText={goalInputHandler}
          value={enteredGoalText} />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler}/>
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel}/>
          </View>
        </View>
      </View>
    </Modal>
  )
}

interface propsInterface {
  onAddGoal: (props: string) => void;
  visible: boolean,
  onCancel: () => void
}

export default GoalInput;