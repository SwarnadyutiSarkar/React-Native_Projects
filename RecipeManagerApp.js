// RecipeManagerApp.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const RecipeManagerApp = () => {
  const [recipes, setRecipes] = useState([]);
  const [newRecipe, setNewRecipe] = useState('');

  const handleAddRecipe = () => {
    if (newRecipe.trim() !== '') {
      setRecipes([...recipes, { id: Date.now().toString(), name: newRecipe }]);
      setNewRecipe('');
    }
  };

  const handleDeleteRecipe = (id) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Recipe Manager App</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter recipe name"
          value={newRecipe}
          onChangeText={(text) => setNewRecipe(text)}
        />
        <Button title="Add Recipe" onPress={handleAddRecipe} />
      </View>
      <FlatList
        data={recipes}
        renderItem={({ item }) => (
          <View style={styles.recipeItem}>
            <Text>{item.name}</Text>
            <Button title="Delete" onPress={() => handleDeleteRecipe(item.id)} />
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
  recipeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});

export default RecipeManagerApp;
