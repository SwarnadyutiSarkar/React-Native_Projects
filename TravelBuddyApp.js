// TravelBuddyApp.js

import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

const TravelBuddyApp = () => {
  const [travelBuddies, setTravelBuddies] = useState([]);

  const handleFindTravelBuddies = () => {
    // Implement functionality to find travel buddies
    // Update the travelBuddies state with the fetched data
    // For example:
    fetchTravelBuddies();
  };

  const fetchTravelBuddies = async () => {
    try {
      // Fetch travel buddies from backend API or use travel companion services
      const travelBuddiesList = ['Travel Buddy 1', 'Travel Buddy 2'];
      setTravelBuddies(travelBuddiesList);
    } catch (error) {
      console.error('Error fetching travel buddies: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Travel Buddy App</Text>
      <Button
        title="Find Travel Buddies"
        onPress={handleFindTravelBuddies}
      />
      <FlatList
        data={travelBuddies}
        renderItem={({ item }) => (
          <View style={styles.travelBuddyItem}>
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
  travelBuddyItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
});

export default TravelBuddyApp;
