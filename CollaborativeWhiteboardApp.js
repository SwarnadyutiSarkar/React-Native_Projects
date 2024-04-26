// CollaborativeWhiteboardApp.js

import React, { useRef, useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, PanResponder, Dimensions } from 'react-native';
import io from 'socket.io-client';

const CollaborativeWhiteboardApp = () => {
  const [lines, setLines] = useState([]);
  const socket = useRef(null);
  const boardRef = useRef(null);

  useEffect(() => {
    socket.current = io('http://localhost:3000'); // Replace with your server URL

    socket.current.on('draw', (line) => {
      setLines((prevLines) => [...prevLines, line]);
    });

    return () => {
      socket.current.disconnect();
    };
  }, []);

  const handleDraw = (x, y) => {
    const newLine = { start: { x: x / boardWidth, y: y / boardHeight } };
    setLines((prevLines) => [...prevLines, newLine]);
    socket.current.emit('draw', newLine);
  };

  const handleLayout = () => {
    const { width, height } = Dimensions.get('window');
    boardWidth = width;
    boardHeight = height;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Collaborative Whiteboard App</Text>
      <View style={styles.board} onLayout={handleLayout}>
        <Board lines={lines} />
        <DrawingArea onDraw={handleDraw} />
      </View>
    </View>
  );
};

const DrawingArea = ({ onDraw }) => {
  const handleTouchMove = (event) => {
    const { nativeEvent } = event;
    onDraw(nativeEvent.pageX, nativeEvent.pageY);
  };

  return (
    <View style={styles.drawingArea} onTouchMove={handleTouchMove} />
  );
};

const Board = ({ lines }) => {
  return (
    <View style={styles.board}>
      {lines.map((line, index) => (
        <Line key={index} line={line} />
      ))}
    </View>
  );
};

const Line = ({ line }) => {
  const positionStyle = {
    top: line.start.y * 100 + '%',
    left: line.start.x * 100 + '%',
  };

  return <View style={[styles.line, positionStyle]} />;
};

let boardWidth = 0;
let boardHeight = 0;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  board: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  drawingArea: {
    ...StyleSheet.absoluteFillObject,
  },
  line: {
    position: 'absolute',
    backgroundColor: 'black',
    width: 2,
    height: 2,
    borderRadius: 1,
  },
});

export default CollaborativeWhiteboardApp;
