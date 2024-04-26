// JobSearchApp.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const JobSearchApp = () => {
  const [jobs, setJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = async () => {
    try {
      // Fetch job listings from a job search API (e.g., GitHub Jobs, Indeed)
      const response = await fetch(`https://api.example.com/jobs?q=${searchQuery}`);
      const data = await response.json();
      setJobs(data);
    } catch (error) {
      console.error('Error fetching jobs: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Job Search App</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter job title"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <Button title="Search" onPress={handleSearch} />
      <FlatList
        data={jobs}
        renderItem={({ item }) => (
          <View style={styles.jobItem}>
            <Text>{item.title}</Text>
            <Text>{item.company}</Text>
            <Text>{item.location}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
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
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
  },
  jobItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
});

export default JobSearchApp;
