// MusicTheoryTrainerApp.js

import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const MusicTheoryTrainerApp = () => {
  const [question, setQuestion] = useState(generateQuestion());

  function generateQuestion() {
    const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    const scales = ['Major', 'Minor'];
    const randomNote = notes[Math.floor(Math.random() * notes.length)];
    const randomScale = scales[Math.floor(Math.random() * scales.length)];
    return `What is the ${randomScale} scale starting from ${randomNote}?`;
  }

  const handleNewQuestion = () => {
    setQuestion(generateQuestion());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Music Theory Trainer App</Text>
      <Text style={styles.question}>{question}</Text>
      <Button title="New Question" onPress={handleNewQuestion} />
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
  question: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default MusicTheoryTrainerApp;
