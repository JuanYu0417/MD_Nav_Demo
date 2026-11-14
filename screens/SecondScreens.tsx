import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from '../App';

type SecondNavigationProp = StackNavigationProp<RootStackParamList, 'Second'>;

export default function SecondScreen() {
  const navigation = useNavigation<SecondNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Second Screen</Text>
      <Button
        mode="contained"
        icon="arrow-left"
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        Go back to Home
      </Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 20,
  },
});
