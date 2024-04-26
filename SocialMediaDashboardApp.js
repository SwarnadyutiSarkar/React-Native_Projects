// SocialMediaDashboardApp.js

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const SocialMediaDashboardApp = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch social media posts from API
    // Update the posts state with the fetched data
    // For example:
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      // Fetch posts from social media API
      const response = await fetch('https://api.example.com/posts');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Social Media Dashboard App</Text>
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <View style={styles.post}>
            <Text>{item.user}: {item.text}</Text>
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
  post: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
});

export default SocialMediaDashboardApp;
