// JokeGeneratorApp.js

import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const JokeGeneratorApp = () => {
  const [joke, setJoke] = useState('');

  const fetchJoke = async () => {
    try {
      const response = await fetch('https://api.chucknorris.io/jokes/random');
      const data = await response.json();
      setJoke(data.value);
    } catch (error) {
      console.error('Error fetching joke: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.joke}>{joke}</Text>
      <Button title="Get Joke" onPress={fetchJoke} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  joke: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default JokeGeneratorApp;
