// ThesaurusApp.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const ThesaurusApp = () => {
  const [synonyms, setSynonyms] = useState([]);
  const [word, setWord] = useState('');

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://api.datamuse.com/words?rel_syn=${word}`);
      const data = await response.json();
      const synonymsList = data.map((entry) => entry.word);
      setSynonyms(synonymsList);
    } catch (error) {
      console.error('Error fetching synonyms: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Thesaurus App</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter word"
        value={word}
        onChangeText={(text) => setWord(text)}
      />
      <Button title="Search Synonyms" onPress={handleSearch} />
      <FlatList
        data={synonyms}
        renderItem={({ item }) => <Text style={styles.synonym}>{item}</Text>}
        keyExtractor={(item) => item}
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
  synonym: {
    marginBottom: 10,
  },
});

export default ThesaurusApp;
