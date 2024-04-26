// MeditationTimerApp.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const MeditationTimerApp = () => {
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  const [timerRunning, setTimerRunning] = useState(false);
  const [timerInterval, setTimerInterval] = useState(null);

  const handleStartTimer = () => {
    const totalSeconds = parseInt(minutes) * 60 + parseInt(seconds);
    if (totalSeconds > 0) {
      setTimerRunning(true);
      setTimerInterval(setInterval(() => {
        if (totalSeconds === 0) {
          clearInterval(timerInterval);
          setTimerRunning(false);
        } else {
          setMinutes(Math.floor(totalSeconds / 60).toString());
          setSeconds((totalSeconds % 60).toString().padStart(2, '0'));
          totalSeconds--;
        }
      }, 1000));
    }
  };

  const handleStopTimer = () => {
    clearInterval(timerInterval);
    setTimerRunning(false);
    setMinutes('');
    setSeconds('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Meditation Timer App</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Minutes"
          value={minutes}
          onChangeText={(text) => setMinutes(text.replace(/[^0-9]/g, ''))}
          keyboardType="numeric"
        />
        <Text style={styles.separator}>:</Text>
        <TextInput
          style={[styles.input, { width: 50 }]}
          placeholder="Seconds"
          value={seconds}
          onChangeText={(text) => setSeconds(text.replace(/[^0-9]/g, ''))}
          keyboardType="numeric"
        />
      </View>
      {!timerRunning ? (
        <Button title="Start Timer" onPress={handleStartTimer} />
      ) : (
        <Button title="Stop Timer" onPress={handleStopTimer} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    textAlign: 'center',
  },
  separator: {
    fontSize: 20,
    marginHorizontal: 5,
  },
});

export default MeditationTimerApp;
