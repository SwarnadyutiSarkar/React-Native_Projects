// AnatomyAtlasApp.js

import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

const AnatomyAtlasApp = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);

  const handleRegionSelect = (region) => {
    setSelectedRegion(region);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Anatomy Atlas App</Text>
      <View style={styles.imageContainer}>
        <Image source={require('./assets/anatomy_diagram.png')} style={styles.image} />
        <View style={styles.overlay}>
          <Button title="Head" onPress={() => handleRegionSelect('Head')} />
          <Button title="Torso" onPress={() => handleRegionSelect('Torso')} />
          <Button title="Limbs" onPress={() => handleRegionSelect('Limbs')} />
        </View>
      </View>
      {selectedRegion && (
        <Text style={styles.selectedRegionText}>Selected Region: {selectedRegion}</Text>
      )}
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
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: 300,
    height: 300,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedRegionText: {
    marginTop: 20,
    fontSize: 18,
  },
});

export default AnatomyAtlasApp;
