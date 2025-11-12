import { Pressable, Text, View } from "react-native";
import Stylesheet from "./Stylesheet";



function GoalItem( props: propsInterface ){
  const styles = Stylesheet();
  
  function deleteItemHandler(){
    props.onDeleteItem(props.index)
  }
  
  return (
    <Pressable onPress={ deleteItemHandler } android_ripple={{color: '#270850ff'}}>
      <View style={styles.goalItem} key={props.index}> 
        <Text style={styles.goalText}>
          {props.text}
        </Text>  
      </View>
    </Pressable>
  )
}

interface propsInterface {
  index: number;
  text: string;
  onDeleteItem: (id: number) => void;
}

export default GoalItem;