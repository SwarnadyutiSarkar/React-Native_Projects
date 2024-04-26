// HistoricalTimelineApp.js

import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HistoricalTimelineApp = () => {
  const [events, setEvents] = useState([
    { id: 1, year: '1776', event: 'Declaration of Independence' },
    { id: 2, year: '1861', event: 'American Civil War Begins' },
    { id: 3, year: '1945', event: 'End of World War II' },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Historical Timeline App</Text>
      {events.map((event) => (
        <View key={event.id} style={styles.event}>
          <Text>{event.year}</Text>
          <Text>{event.event}</Text>
        </View>
      ))}
      <Button title="Add Event" onPress={() => setEvents([...events, generateRandomEvent()])} />
    </View>
  );
};

function generateRandomEvent() {
  const years = Array.from({ length: 2022 - 100 }, (_, index) => index + 1000);
  const randomYear = years[Math.floor(Math.random() * years.length)];
  return { id: Date.now(), year: randomYear.toString(), event: 'Random Event' };
}

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
  event: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
});

export default HistoricalTimelineApp;
