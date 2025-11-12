import GoalInput from "@/components/GoalInput";
import GoalItem from "@/components/GoalItem";
import { useState } from 'react';
import { FlatList, View } from "react-native";
import Stylesheet from '../components/Stylesheet';

export default function Index() {
  const styles = Stylesheet();

  const [courseGoals, setCourseGoals] = useState<string[]>([]);

  function addGoalHandler(enteredGoalText: string) {
    setCourseGoals(
      (currentCourseGoals) => [...currentCourseGoals, enteredGoalText]);
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
      <GoalInput onAddGoal={addGoalHandler}/>
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
