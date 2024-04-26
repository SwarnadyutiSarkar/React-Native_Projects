// MusicPlayerApp.js

import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

const MusicPlayerApp = () => {
  const [playlist, setPlaylist] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);

  const handleAddToPlaylist = () => {
    // Implement file selection functionality to add tracks to the playlist
    // You can use libraries like react-native-media-meta for fetching metadata of audio files
    alert('Add to playlist functionality');
  };

  const handlePlayTrack = (track) => {
    setCurrentTrack(track);
    // Implement playback functionality using libraries like react-native-sound
    alert(`Playing: ${track}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Music Player App</Text>
      <Button title="Add to Playlist" onPress={handleAddToPlaylist} />
      <FlatList
        data={playlist}
        renderItem={({ item }) => (
          <View style={styles.trackItem}>
            <Text>{item}</Text>
            <Button title="Play" onPress={() => handlePlayTrack(item)} />
          </View>
        )}
        keyExtractor={(item) => item}
      />
      {currentTrack && (
        <Text style={styles.currentTrack}>Now Playing: {currentTrack}</Text>
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
  trackItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  currentTrack: {
    marginTop: 20,
    fontWeight: 'bold',
  },
});

export default MusicPlayerApp;
