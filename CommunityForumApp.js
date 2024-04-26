// CommunityForumApp.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const CommunityForumApp = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  const handleAddPost = () => {
    if (newPost.trim() !== '') {
      setPosts([...posts, { id: Date.now().toString(), content: newPost, comments: [] }]);
      setNewPost('');
    }
  };

  const handleAddComment = (postId, commentContent) => {
    setPosts(
      posts.map((post) =>
        post.id === postId ? { ...post, comments: [...post.comments, commentContent] } : post
      )
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Community Forum App</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Write your post"
          value={newPost}
          onChangeText={(text) => setNewPost(text)}
        />
        <Button title="Add Post" onPress={handleAddPost} />
      </View>
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <View style={styles.post}>
            <Text>{item.content}</Text>
            <TextInput
              style={styles.input}
              placeholder="Write your comment"
              onChangeText={(text) => handleAddComment(item.id, text)}
            />
            <FlatList
              data={item.comments}
              renderItem={({ item }) => <Text style={styles.comment}>{item}</Text>}
              keyExtractor={(item, index) => index.toString()}
            />
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
    marginBottom: 10,
  },
  post: {
    marginBottom: 20,
  },
  comment: {
    marginLeft: 20,
    color: '#666',
  },
});

export default CommunityForumApp;
