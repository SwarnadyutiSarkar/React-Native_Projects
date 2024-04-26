// FitnessTrackerApp.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';

const FitnessTrackerApp = () => {
  const [workouts, setWorkouts] = useState([]);
  const [newWorkout, setNewWorkout] = useState('');

  const handleAddWorkout = () => {
    if (newWorkout.trim() !== '') {
      setWorkouts([...workouts, { id: Date.now().toString(), workout: newWorkout }]);
      setNewWorkout('');
    }
  };

  const handleDeleteWorkout = (id) => {
    setWorkouts(workouts.filter((workout) => workout.id !== id));
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Fitness Tracker App</Text>
      <View style={{ flexDirection: 'row', marginBottom: 10 }}>
        <TextInput
          style={{ flex: 1, borderWidth: 1, borderColor: '#ccc', padding: 10, marginRight: 10 }}
          placeholder="Enter your workout"
          value={newWorkout}
          onChangeText={(text) => setNewWorkout(text)}
        />
        <Button title="Add" onPress={handleAddWorkout} />
      </View>
      <FlatList
        data={workouts}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
            <Text style={{ flex: 1 }}>{item.workout}</Text>
            <Button title="Delete" onPress={() => handleDeleteWorkout(item.id)} />
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default FitnessTrackerApp;
