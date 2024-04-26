// FriendLocatorApp.js

import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

const FriendLocatorApp = () => {
  const [friends, setFriends] = useState([]);

  const handleFindFriends = () => {
    // Implement functionality to find friends nearby
    // Update the friends state with the fetched data
    // For example:
    fetchFriends();
  };

  const fetchFriends = async () => {
    try {
      // Fetch friends from backend API or use location-based services
      const nearbyFriends = ['Friend 1', 'Friend 2', 'Friend 3'];
      setFriends(nearbyFriends);
    } catch (error) {
      console.error('Error fetching friends: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Friend Locator App</Text>
      <Button title="Find Friends Nearby" onPress={handleFindFriends} />
      <FlatList
        data={friends}
        renderItem={({ item }) => (
          <View style={styles.friendItem}>
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
  friendItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
});

export default FriendLocatorApp;
