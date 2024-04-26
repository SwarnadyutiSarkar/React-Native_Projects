// LanguagePronunciationTrainerApp.js

import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const LanguagePronunciationTrainerApp = () => {
  const [word, setWord] = useState(generateRandomWord());

  function generateRandomWord() {
    // Implement logic to fetch random words from an API or provide predefined words
    const words = ['apple', 'banana', 'cat', 'dog', 'elephant'];
    return words[Math.floor(Math.random() * words.length)];
  }

  const handleNewWord = () => {
    setWord(generateRandomWord());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Language Pronunciation Trainer App</Text>
      <Text style={styles.word}>{word}</Text>
      <Button title="New Word" onPress={handleNewWord} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  word: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default LanguagePronunciationTrainerApp;
