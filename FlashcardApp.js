// FlashcardApp.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const FlashcardApp = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleAddFlashcard = () => {
    if (question.trim() !== '' && answer.trim() !== '') {
      setFlashcards([...flashcards, { id: Date.now().toString(), question, answer }]);
      setQuestion('');
      setAnswer('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Flashcard App</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter question"
        value={question}
        onChangeText={(text) => setQuestion(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter answer"
        value={answer}
        onChangeText={(text) => setAnswer(text)}
      />
      <Button title="Add Flashcard" onPress={handleAddFlashcard} />
      <FlatList
        data={flashcards}
        renderItem={({ item }) => (
          <View style={styles.flashcardItem}>
            <Text>Q: {item.question}</Text>
            <Text>A: {item.answer}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
  },
  flashcardItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
});

export default FlashcardApp;
