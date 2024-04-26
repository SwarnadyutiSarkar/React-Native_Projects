// DocumentScannerApp.js

import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';
import { ImageManipulator } from 'expo-image-manipulator';

const DocumentScannerApp = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);

  const handleCameraPermission = async () => {
    const { status } = await Camera.requestPermissionsAsync();
    setHasPermission(status === 'granted');
  };

  const handleCaptureImage = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      const resizedPhoto = await ImageManipulator.manipulateAsync(
        photo.uri,
        [{ resize: { width: 800 } }],
        { compress: 0.8, format: 'jpeg' }
      );
      setCapturedImage(resizedPhoto.uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Document Scanner App</Text>
      {hasPermission === null ? (
        <Button title="Request Camera Permission" onPress={handleCameraPermission} />
      ) : hasPermission === false ? (
        <Text>No access to camera</Text>
      ) : (
        <>
          <Camera style={styles.camera} ref={cameraRef} type={Camera.Constants.Type.back} />
          <Button title="Capture Image" onPress={handleCaptureImage} />
          {capturedImage && <Image source={{ uri: capturedImage }} style={styles.capturedImage} />}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  camera: {
    width: '100%',
    height: 400,
    marginBottom: 20,
  },
  capturedImage: {
    width: '100%',
    height: 300,
    marginTop: 20,
  },
});

export default DocumentScannerApp;
