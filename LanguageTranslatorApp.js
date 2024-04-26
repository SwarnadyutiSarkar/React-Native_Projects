// LanguageTranslatorApp.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const LanguageTranslatorApp = () => {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('es'); // Default to Spanish

  const handleTranslate = async () => {
    try {
      // Call translation API (e.g., Google Translate API)
      const response = await fetch(
        `https://translation.googleapis.com/language/translate/v2?key=YOUR_API_KEY&q=${inputText}&target=${targetLanguage}`
      );
      const data = await response.json();
      setTranslatedText(data.data.translations[0].translatedText);
    } catch (error) {
      console.error('Error translating text: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Language Translator App</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter text to translate"
        value={inputText}
        onChangeText={(text) => setInputText(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Target language (e.g., es for Spanish)"
        value={targetLanguage}
        onChangeText={(text) => setTargetLanguage(text)}
      />
      <Button title="Translate" onPress={handleTranslate} />
      <Text style={styles.translation}>{translatedText}</Text>
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
  translation: {
    marginTop: 20,
    fontSize: 18,
  },
});

export default LanguageTranslatorApp;
