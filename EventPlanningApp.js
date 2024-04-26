// EventPlanningApp.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const EventPlanningApp = () => {
  const [events, setEvents] = useState([]);
  const [eventName, setEventName] = useState('');

  const handleAddEvent = () => {
    if (eventName.trim() !== '') {
      setEvents([...events, { id: Date.now().toString(), name: eventName }]);
      setEventName('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Event Planning App</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter event name"
          value={eventName}
          onChangeText={(text) => setEventName(text)}
        />
        <Button title="Add Event" onPress={handleAddEvent} />
      </View>
      <FlatList
        data={events}
        renderItem={({ item }) => (
          <View style={styles.eventItem}>
            <Text>{item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
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
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginRight: 10,
  },
  eventItem: {
    marginBottom: 10,
  },
});

export default EventPlanningApp;
