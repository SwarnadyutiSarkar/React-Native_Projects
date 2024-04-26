// QuizGameApp.js

import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const QuizGameApp = () => {
  const [question, setQuestion] = useState('What is the capital of France?');
  const [options, setOptions] = useState(['Paris', 'London', 'Berlin', 'Rome']);
  const [correctAnswer, setCorrectAnswer] = useState('Paris');
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    setShowResult(true);
  };

  const handleNextQuestion = () => {
    // Implement functionality to load next question
    // Reset selectedAnswer and setShowResult to false
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{question}</Text>
      {options.map((option, index) => (
        <Button
          key={index}
          title={option}
          onPress={() => handleAnswer(option)}
          disabled={showResult}
        />
      ))}
      {showResult && (
        <Text style={styles.result}>
          {selectedAnswer === correctAnswer ? 'Correct!' : 'Incorrect!'}
        </Text>
      )}
      <Button title="Next Question" onPress={handleNextQuestion} disabled={!showResult} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  question: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  result: {
    fontSize: 18,
    marginTop: 20,
    fontWeight: 'bold',
  },
});

export default QuizGameApp;
