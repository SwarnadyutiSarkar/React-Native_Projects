// CodingChallengesApp.js

import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CodingChallengesApp = () => {
  const [challenge, setChallenge] = useState(generateChallenge());

  function generateChallenge() {
    // Implement logic to fetch coding challenges from an API or provide predefined challenges
    const challengeText = 'Write a function to reverse a string.';
    return challengeText;
  }

  const handleNewChallenge = () => {
    setChallenge(generateChallenge());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Coding Challenges App</Text>
      <Text style={styles.challenge}>{challenge}</Text>
      <Button title="New Challenge" onPress={handleNewChallenge} />
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
  challenge: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default CodingChallengesApp;
