import GoalInput from "@/app-example/components/GoalInput";
import GoalItem from "@/app-example/components/GoalItem";
import { useState } from 'react';
import { FlatList, View } from "react-native";
import Stylesheet from '../app-example/components/Stylesheet';

export default function Index() {
  const styles = Stylesheet();

  const [courseGoals, setCourseGoals] = useState<string[]>([]);

  function addGoalHandler(enteredGoalText: string) {
    setCourseGoals(
      (currentCourseGoals) => [...currentCourseGoals, enteredGoalText]);
  }

  return (
    <View style={ styles.appContainer }>
      <GoalInput onAddGoal={addGoalHandler}/>
      <View style={ styles.goalsContainer}>
          <FlatList 
            alwaysBounceVertical={false} 
            data={courseGoals} 
            renderItem={(itemData) => {
              return <GoalItem text={itemData.item} index={itemData.index}/>
            }}> 
          </FlatList>
        </View>
    </View>
  );
}
