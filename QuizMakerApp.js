// QuizMakerApp.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const QuizMakerApp = () => {
  const [questions, setQuestions] = useState([]);
  const [questionText, setQuestionText] = useState('');
  const [optionsText, setOptionsText] = useState('');
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(null);

  const handleAddQuestion = () => {
    if (questionText.trim() !== '' && optionsText.trim() !== '' && correctAnswerIndex !== null) {
      const options = optionsText.split(',');
      const newQuestion = {
        id: Date.now().toString(),
        question: questionText,
        options,
        correctAnswerIndex,
      };
      setQuestions([...questions, newQuestion]);
      setQuestionText('');
      setOptionsText('');
      setCorrectAnswerIndex(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Quiz Maker App</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter question"
        value={questionText}
        onChangeText={(text) => setQuestionText(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter options separated by comma"
        value={optionsText}
        onChangeText={(text) => setOptionsText(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter index of correct answer (starting from 0)"
        keyboardType="numeric"
        value={correctAnswerIndex}
        onChangeText={(text) => setCorrectAnswerIndex(parseInt(text))}
      />
      <Button title="Add Question" onPress={handleAddQuestion} />
      <FlatList
        data={questions}
        renderItem={({ item }) => (
          <View style={styles.questionItem}>
            <Text>{item.question}</Text>
            {item.options.map((option, index) => (
              <Text key={index}>{option}</Text>
            ))}
            <Text>Correct Answer: {item.options[item.correctAnswerIndex]}</Text>
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
  questionItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
});

export default QuizMakerApp;
