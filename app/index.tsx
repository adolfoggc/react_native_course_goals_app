import GoalInput from "@/components/GoalInput";
import GoalItem from "@/components/GoalItem";
import { useState } from 'react';
import { Button, FlatList, View } from "react-native";
import Stylesheet from '../components/Stylesheet';

export default function Index() {
  const styles = Stylesheet();

  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState<string[]>([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function addGoalHandler(enteredGoalText: string) {
    setCourseGoals(
      (currentCourseGoals) => [...currentCourseGoals, enteredGoalText]);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function deleteGoalHandler(id: number){
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter(
        (goal, index) => index !== id
      ); 
    })
  }

  return (
    <View style={ styles.appContainer }>
      <Button title='Add New Goal' color='#5e0acc' onPress={startAddGoalHandler}/>
      <GoalInput onAddGoal={addGoalHandler} visible={modalIsVisible} onCancel={endAddGoalHandler}/>
      <View style={ styles.goalsContainer}>
          <FlatList 
            alwaysBounceVertical={false} 
            data={courseGoals} 
            renderItem={(itemData) => {
              return <GoalItem text={itemData.item} index={itemData.index} onDeleteItem={deleteGoalHandler}/>
            }}> 
          </FlatList>
        </View>
    </View>
  );
}
