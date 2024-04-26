// NoteTakingApp.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';

const NoteTakingApp = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  const handleAddNote = () => {
    if (newNote.trim() !== '') {
      setNotes([...notes, { id: Date.now().toString(), text: newNote }]);
      setNewNote('');
    }
  };

  const handleDeleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Note-taking App</Text>
      <View style={{ flexDirection: 'row', marginBottom: 10 }}>
        <TextInput
          style={{ flex: 1, borderWidth: 1, borderColor: '#ccc', padding: 10, marginRight: 10 }}
          placeholder="Enter your note"
          value={newNote}
          onChangeText={(text) => setNewNote(text)}
        />
        <Button title="Add" onPress={handleAddNote} />
      </View>
      <FlatList
        data={notes}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
            <Text style={{ flex: 1 }}>{item.text}</Text>
            <Button title="Delete" onPress={() => handleDeleteNote(item.id)} />
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default NoteTakingApp;
