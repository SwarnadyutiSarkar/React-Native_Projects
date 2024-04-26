// CodeSnippetManagerApp.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const CodeSnippetManagerApp = () => {
  const [snippets, setSnippets] = useState([]);
  const [newSnippet, setNewSnippet] = useState('');

  const handleAddSnippet = () => {
    if (newSnippet.trim() !== '') {
      setSnippets([...snippets, { id: Date.now().toString(), code: newSnippet }]);
      setNewSnippet('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Code Snippet Manager App</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter code snippet"
        value={newSnippet}
        onChangeText={(text) => setNewSnippet(text)}
        multiline
      />
      <Button title="Add Snippet" onPress={handleAddSnippet} />
      <FlatList
        data={snippets}
        renderItem={({ item }) => (
          <View style={styles.snippetItem}>
            <Text>{item.code}</Text>
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
    minHeight: 100,
  },
  snippetItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
});

export default CodeSnippetManagerApp;
