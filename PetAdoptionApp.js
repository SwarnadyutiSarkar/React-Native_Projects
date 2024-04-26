// PetAdoptionApp.js

import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

const PetAdoptionApp = () => {
  const [pets, setPets] = useState([]);

  const handleFindPetsForAdoption = () => {
    // Implement functionality to find pets for adoption
    // Update the pets state with the fetched data
    // For example:
    fetchPets();
  };

  const fetchPets = async () => {
    try {
      // Fetch pets from backend API or use pet adoption services
      const petsForAdoption = ['Dog 1', 'Cat 1', 'Dog 2', 'Cat 2'];
      setPets(petsForAdoption);
    } catch (error) {
      console.error('Error fetching pets for adoption: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Pet Adoption Platform</Text>
      <Button title="Find Pets for Adoption" onPress={handleFindPetsForAdoption} />
      <FlatList
        data={pets}
        renderItem={({ item }) => (
          <View style={styles.petItem}>
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
  petItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
});

export default PetAdoptionApp;
