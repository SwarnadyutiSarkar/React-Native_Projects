// FileManagerApp.js

import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const FileManagerApp = () => {
  const [files, setFiles] = useState([]);

  const handleBrowseFiles = () => {
    // Implement file browsing functionality
    // You can use libraries like react-native-document-picker for file selection
    // Update the files state with the selected files
    alert('Browse files functionality');
  };

  const handleDeleteFile = (fileName) => {
    setFiles(files.filter((file) => file !== fileName));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>File Manager App</Text>
      <Button title="Browse Files" onPress={handleBrowseFiles} />
      <Text style={styles.fileList}>Files:</Text>
      {files.map((file, index) => (
        <View key={index} style={styles.fileItem}>
          <Text>{file}</Text>
          <Button title="Delete" onPress={() => handleDeleteFile(file)} />
        </View>
      ))}
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
  fileList: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  fileItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
  },
});

export default FileManagerApp;
