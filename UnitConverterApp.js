// UnitConverterApp.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const UnitConverterApp = () => {
  const [value, setValue] = useState('');
  const [convertedValue, setConvertedValue] = useState('');
  const [selectedUnit, setSelectedUnit] = useState('cm');
  const units = {
    cm: 1,
    inch: 2.54,
    kg: 1,
    lb: 0.453592,
    celsius: 1,
    fahrenheit: 1.8,
  };

  const handleConvert = () => {
    const newValue = parseFloat(value) * units[selectedUnit];
    setConvertedValue(newValue.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Unit Converter App</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter value"
        keyboardType="numeric"
        value={value}
        onChangeText={(text) => setValue(text)}
      />
      <Picker
        selectedValue={selectedUnit}
        onValueChange={(itemValue) => setSelectedUnit(itemValue)}
      >
        {Object.keys(units).map((unit) => (
          <Picker.Item key={unit} label={unit} value={unit} />
        ))}
      </Picker>
      <Button title="Convert" onPress={handleConvert} />
      <Text style={styles.result}>Converted Value: {convertedValue}</Text>
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
    marginBottom: 10,
  },
  result: {
    fontSize: 18,
    marginTop: 20,
  },
});

export default UnitConverterApp;
