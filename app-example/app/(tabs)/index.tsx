import { useColorScheme } from '@/hooks/use-color-scheme';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const colorScheme = useColorScheme();

  return (
    <View style={styles.topStyle}>
      <View>
        <Text style={styles.textStyle}>New Text!!!</Text>
      </View>
      <Text>More Text!</Text>
      <Button title="Tap Mew!!!" color="#4287f5" touchSoundDisabled={ false }  />
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  topStyle: {
    backgroundColor: "#FFF",
    paddingTop: 50
  },
  textStyle: {
    backgroundColor: "#FFF"
  }
});
