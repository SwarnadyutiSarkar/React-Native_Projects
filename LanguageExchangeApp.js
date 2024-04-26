// LanguageExchangeApp.js

import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

const LanguageExchangeApp = () => {
  const [users, setUsers] = useState([]);

  const handleFindLanguageExchangePartners = () => {
    // Implement functionality to find language exchange partners
    // Update the users state with the fetched data
    // For example:
    fetchUsers();
  };

  const fetchUsers = async () => {
    try {
      // Fetch users from backend API based on language preferences
      const languageExchangePartners = ['User 1', 'User 2', 'User 3'];
      setUsers(languageExchangePartners);
    } catch (error) {
      console.error('Error fetching language exchange partners: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Language Exchange Platform</Text>
      <Button
        title="Find Language Exchange Partners"
        onPress={handleFindLanguageExchangePartners}
      />
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <View style={styles.userItem}>
            <Text>{item}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
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
  userItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
});

export default LanguageExchangeApp;
