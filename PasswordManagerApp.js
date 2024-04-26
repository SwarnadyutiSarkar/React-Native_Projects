// PasswordManagerApp.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const PasswordManagerApp = () => {
  const [passwords, setPasswords] = useState([]);
  const [newPassword, setNewPassword] = useState('');
  const [newUsername, setNewUsername] = useState('');

  const handleAddPassword = () => {
    if (newPassword.trim() !== '' && newUsername.trim() !== '') {
      setPasswords([...passwords, { id: Date.now().toString(), username: newUsername, password: newPassword }]);
      setNewPassword('');
      setNewUsername('');
    }
  };

  const handleDeletePassword = (id) => {
    setPasswords(passwords.filter((password) => password.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Password Manager App</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter username"
          value={newUsername}
          onChangeText={(text) => setNewUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          secureTextEntry
          value={newPassword}
          onChangeText={(text) => setNewPassword(text)}
        />
        <Button title="Add Password" onPress={handleAddPassword} />
      </View>
      <FlatList
        data={passwords}
        renderItem={({ item }) => (
          <View style={styles.passwordItem}>
            <Text>{item.username}</Text>
            <Text>{item.password}</Text>
            <Button title="Delete" onPress={() => handleDeletePassword(item.id)} />
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
  passwordItem: {
    marginBottom: 10,
  },
});

export default PasswordManagerApp;
