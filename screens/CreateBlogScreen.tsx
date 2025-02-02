import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, ScrollView, Image, Pressable, Text, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const CreateBlogScreen = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [images, setImages] = useState<string[]>([]);

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert('Permission required!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (!result.canceled) {
      setImages([...images, result.assets[0].uri]); // ✅ Use `result.assets[0].uri` instead of `result.uri`
    }
  };

  const handlePost = () => {
    // Here you would typically dispatch an action or update your context/state to add the blog.
    console.log({ title, content, tags, images });
    alert('Blog Posted!');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput style={styles.input} placeholder="Title" value={title} onChangeText={setTitle} />
      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Content"
        value={content}
        onChangeText={setContent}
        multiline
      />
      <TextInput style={styles.input} placeholder="Tags (comma separated)" value={tags} onChangeText={setTags} />
      <TouchableOpacity style={styles.button} onPress={pickImage}>
        <Text style={styles.buttonText}>Pick an Image</Text>
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        {images.map((uri) => (
          <Image key={uri} source={{ uri }} style={styles.image} />
        ))}
      </View>
      <TouchableOpacity style={styles.button} onPress={handlePost}>
        <Text style={styles.buttonText}>Post Blog</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CreateBlogScreen;

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10, marginBottom: 10, backgroundColor: '#fff' },
  imageContainer: { flexDirection: 'row', flexWrap: 'wrap', marginVertical: 10 },
  image: { width: 80, height: 80, borderRadius: 8, marginRight: 10, marginBottom: 10 },
  button: {
    backgroundColor: '#000', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10, 
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
