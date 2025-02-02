import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import bloggersData from '../data/bloggers.json'; // JSON mock data

const ProfileScreen = ({ route }: { route: any }) => {
  const { bloggerId } = route.params;
  const blogger = bloggersData.find((b) => b.id === bloggerId);

  if (!blogger) {
    return (
      <View style={styles.container}>
        <Text>Blogger not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: blogger.image }} style={styles.avatar} />
      <Text style={styles.name}>{blogger.name}</Text>
      <Text style={styles.bio}>{blogger.bio}</Text>
      <Text>Expertise: {blogger.expertise}</Text>
      <Text>Total Blogs: {blogger.totalBlogs}</Text>
      <Text>Followers: {blogger.followers}</Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 20 },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 10 },
  name: { fontSize: 22, fontWeight: 'bold' },
  bio: { fontSize: 16, marginVertical: 10, textAlign: 'center' },
});
