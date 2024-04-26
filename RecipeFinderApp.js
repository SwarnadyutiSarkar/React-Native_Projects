// RecipeFinderApp.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';

const RecipeFinderApp = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  const handleSearch = () => {
    // Implement search functionality using an API
    // For example, you can use Edamam API for recipe search
    // Make API request based on searchQuery and update recipes state
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Recipe Finder App</Text>
      <TextInput
        style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10 }}
        placeholder="Search recipes..."
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />
      <Button title="Search" onPress={handleSearch} />
      <FlatList
        data={recipes}
        renderItem={({ item }) => (
          <View style={{ borderBottomWidth: 1, borderBottomColor: '#ccc', paddingVertical: 10 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.recipe.label}</Text>
            <Text>Calories: {Math.round(item.recipe.calories)}</Text>
          </View>
        )}
        keyExtractor={(item) => item.recipe.uri}
      />
    </View>
  );
};

export default RecipeFinderApp;
