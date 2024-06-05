import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Translator from './components/Translator';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Translator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default App;
