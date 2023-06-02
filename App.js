import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, SafeAreaView } from 'react-native';
import AguanteBoca from './components/AguanteBoca';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <AguanteBoca />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
});
