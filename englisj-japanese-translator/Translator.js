import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const Translator = () => {
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const translateText = async () => {
    const apiKey = 'YOUR_GOOGLE_TRANSLATE_API_KEY'; // Replace with your API key
    const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

    try {
      const response = await axios.post(url, {
        q: text,
        source: 'en',
        target: 'ja',
        format: 'text',
      });

      const translation = response.data.data.translations[0].translatedText;
      setTranslatedText(translation);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>English to Japanese Translator</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter text in English"
        value={text}
        onChangeText={setText}
      />
      <Button title="Translate" onPress={translateText} />
      {translatedText !== '' && (
        <Text style={styles.translatedText}>Translation: {translatedText}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
  },
  translatedText: {
    marginTop: 20,
    fontSize: 18,
    color: 'blue',
  },
});

export default Translator;
