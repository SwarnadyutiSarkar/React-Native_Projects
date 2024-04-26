// InteractiveStorybookApp.js

import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

const InteractiveStorybookApp = () => {
  const [storyPage, setStoryPage] = useState(1);

  const handleNextPage = () => {
    setStoryPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setStoryPage((prevPage) => prevPage - 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Interactive Storybook App</Text>
      {storyPage === 1 && (
        <>
          <Image source={require('./assets/page1.png')} style={styles.image} />
          <Button title="Next Page" onPress={handleNextPage} />
        </>
      )}
      {storyPage === 2 && (
        <>
          <Image source={require('./assets/page2.png')} style={styles.image} />
          <Button title="Previous Page" onPress={handlePreviousPage} />
          <Button title="Next Page" onPress={handleNextPage} />
        </>
      )}
      {storyPage === 3 && (
        <>
          <Image source={require('./assets/page3.png')} style={styles.image} />
          <Button title="Previous Page" onPress={handlePreviousPage} />
        </>
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
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
});

export default InteractiveStorybookApp;
