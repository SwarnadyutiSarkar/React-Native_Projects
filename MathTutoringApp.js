// MathTutoringApp.js

import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const MathTutoringApp = () => {
  const [problem, setProblem] = useState(generateProblem());

  function generateProblem() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operator = Math.random() < 0.5 ? '+' : '-';
    return { num1, num2, operator };
  }

  const handleNewProblem = () => {
    setProblem(generateProblem());
  };

  const handleSubmitAnswer = (answer) => {
    const { num1, num2, operator } = problem;
    const correctAnswer = operator === '+' ? num1 + num2 : num1 - num2;
    if (parseInt(answer) === correctAnswer) {
      alert('Correct!');
    } else {
      alert('Incorrect!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Math Tutoring App</Text>
      <Text style={styles.problem}>
        {problem.num1} {problem.operator} {problem.num2} =
      </Text>
      <Button title="New Problem" onPress={handleNewProblem} />
      <Button title="Submit Answer" onPress={() => handleSubmitAnswer(answer)} />
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
  problem: {
    fontSize: 36,
    marginBottom: 20,
  },
});

export default MathTutoringApp;
