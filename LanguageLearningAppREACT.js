// LanguageLearningApp.js

import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const LanguageLearningApp = () => {
  const [lesson, setLesson] = useState('Greetings');
  const [lessonContent, setLessonContent] = useState('Hello, how are you?');
  const [quizQuestion, setQuizQuestion] = useState('What is the English translation of "Hola"?');
  const [answerOptions, setAnswerOptions] = useState(['Hello', 'Goodbye', 'Thank you', 'Yes']);
  const [correctAnswer, setCorrectAnswer] = useState('Hello');

  const handleShowAnswer = (selectedAnswer) => {
    if (selectedAnswer === correctAnswer) {
      alert('Correct!');
    } else {
      alert('Incorrect!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Language Learning App</Text>
      <View style={styles.lesson}>
        <Text style={styles.lessonTitle}>Lesson: {lesson}</Text>
        <Text style={styles.lessonContent}>{lessonContent}</Text>
      </View>
      <View style={styles.quiz}>
        <Text style={styles.quizQuestion}>{quizQuestion}</Text>
        {answerOptions.map((option, index) => (
          <Button
            key={index}
            title={option}
            onPress={() => handleShowAnswer(option)}
          />
        ))}
      </View>
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
  lesson: {
    marginBottom: 20,
  },
  lessonTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  lessonContent: {
    fontSize: 16,
  },
  quiz: {
    marginBottom: 20,
  },
  quizQuestion: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default LanguageLearningApp;
