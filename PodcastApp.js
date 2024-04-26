// PodcastApp.js

import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

const PodcastApp = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [selectedPodcast, setSelectedPodcast] = useState(null);

  const handleSelectPodcast = (podcast) => {
    setSelectedPodcast(podcast);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Podcast App</Text>
      <FlatList
        data={podcasts}
        renderItem={({ item }) => (
          <Button title={item.title} onPress={() => handleSelectPodcast(item)} />
        )}
        keyExtractor={(item) => item.id}
      />
      {selectedPodcast && (
        <View style={styles.selectedPodcast}>
          <Text style={styles.selectedTitle}>{selectedPodcast.title}</Text>
          <Text>{selectedPodcast.description}</Text>
          <Button title="Play" onPress={() => alert('Play podcast')} />
          <Button title="Download" onPress={() => alert('Download podcast')} />
          {/* Add more controls for subscribing, adding to playlist, etc. */}
        </View>
      )}
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
  selectedPodcast: {
    marginTop: 20,
  },
  selectedTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default PodcastApp;
