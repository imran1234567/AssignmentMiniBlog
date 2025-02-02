import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BlogsStackParamList } from '../navigation/BlogsStackNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface Blog {
  id: string;
  title: string;
  content: string;
  image: string;
  tags: string[];
  writer: {
    id: string;
    name: string;
    image: string;
  };
  // Other fields as needed
}

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  const navigation = useNavigation<NativeStackNavigationProp<BlogsStackParamList>>();

  const goToDetail = () => {
    navigation.navigate('BlogDetail', { blogId: blog.id });
  };

  return (
    <TouchableOpacity onPress={goToDetail} style={styles.card}>
      <View style={styles.header}>
        <Image source={{ uri: blog.writer.image }} style={styles.avatar} />
        <Text style={styles.name}>{blog.writer.name}</Text>
      </View>
      <Image source={{ uri: blog.image }} style={styles.image} />
      <Text style={styles.title}>{blog.title}</Text>
      <Text style={styles.content}>{blog.content}</Text>
      <View style={styles.tagsContainer}>
        {blog.tags.map((tag) => (
          <Text key={tag} style={styles.tag}>
            {tag}
          </Text>
        ))}
      </View>
    </TouchableOpacity>
  );
};

export default BlogCard;

const styles = StyleSheet.create({
  card: { backgroundColor: '#fff', borderRadius: 8, padding: 10, marginBottom: 15, elevation: 2, marginHorizontal: 15 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  name: { fontSize: 16, fontWeight: 'bold' },
  title: { fontSize: 16, marginBottom: 5, fontWeight: 'bold' },
  tagsContainer: { flexDirection: 'row', flexWrap: 'wrap' },
  tag: { backgroundColor: '#eee', borderRadius: 4, paddingHorizontal: 6, paddingVertical: 2, marginRight: 4, marginBottom: 4 },
  content:{
    fontSize: 14,
    marginBottom: 5,
    color: '#666'
  },
  image: { width: '100%', height: 200, borderRadius: 8, marginBottom: 10 },
});
