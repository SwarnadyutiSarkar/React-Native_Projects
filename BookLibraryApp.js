// BookLibraryApp.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const BookLibraryApp = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState('');

  const handleAddBook = () => {
    if (newBook.trim() !== '') {
      setBooks([...books, { id: Date.now().toString(), title: newBook, progress: 0 }]);
      setNewBook('');
    }
  };

  const handleDeleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Book Library App</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter book title"
          value={newBook}
          onChangeText={(text) => setNewBook(text)}
        />
        <Button title="Add Book" onPress={handleAddBook} />
      </View>
      <FlatList
        data={books}
        renderItem={({ item }) => (
          <View style={styles.bookItem}>
            <Text style={styles.bookTitle}>{item.title}</Text>
            <Text>Progress: {item.progress}%</Text>
            <Button title="Delete" onPress={() => handleDeleteBook(item.id)} />
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
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginRight: 10,
  },
  bookItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  bookTitle: {
    flex: 1,
  },
});

export default BookLibraryApp;
