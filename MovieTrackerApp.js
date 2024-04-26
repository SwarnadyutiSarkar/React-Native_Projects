// MovieTrackerApp.js

import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

const MovieTrackerApp = () => {
  const [watchedMovies, setWatchedMovies] = useState([]);
  const [watchedShows, setWatchedShows] = useState([]);

  const handleAddToWatchlist = () => {
    // Implement functionality to add movies/shows to watchlist
    alert('Add to watchlist functionality');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Movie/TV Show Tracker App</Text>
      <Button title="Add to Watchlist" onPress={handleAddToWatchlist} />
      <Text style={styles.sectionHeading}>Watched Movies:</Text>
      <FlatList
        data={watchedMovies}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item) => item}
      />
      <Text style={styles.sectionHeading}>Watched TV Shows:</Text>
      <FlatList
        data={watchedShows}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item) => item}
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
  sectionHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default MovieTrackerApp;
