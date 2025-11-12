import { useState } from 'react';
import { Button, Modal, TextInput, View } from 'react-native';
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
  }

  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Your course goal!" 
          style={ styles.textInput } 
          onChangeText={goalInputHandler}
          value={enteredGoalText} />
        <Button title="Add Goal" onPress={addGoalHandler}/>
      </View>
    </Modal>
  )
}

interface propsInterface {
  onAddGoal: (props: string) => void;
  visible: boolean
}

export default GoalInput;