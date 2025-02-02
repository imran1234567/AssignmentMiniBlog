import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Pressable } from 'react-native';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { BlogsStackParamList } from '../navigation/BlogsStackNavigator';
import blogsData from '../data/blogs.json';
import { useNavigation } from '@react-navigation/native';

type Props = NativeStackScreenProps<BlogsStackParamList, 'BlogDetail'>;

const BlogDetailScreen: React.FC<Props> = ({ route }) => {
  const { blogId } = route.params;
  const navigation = useNavigation<NativeStackNavigationProp<BlogsStackParamList>>();

  // Find the blog details from the mock data
  const blog = blogsData.find((b) => b.id === blogId);

  if (!blog) {
    return (
      <View style={styles.center}>
        <Text>Blog not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Pressable style={styles.header} onPress={() => navigation.navigate('Profile', { bloggerId: blog.writer.id })}>
        <Image source={{ uri: blog.writer.image }} style={styles.avatar} />
        <Text style={styles.writerName}>{blog.writer.name}</Text>
      </Pressable>
      <Text style={styles.title}>{blog.title}</Text>
      <Image source={{ uri: blog.image }} style={styles.image} />
      <View style={styles.tagsContainer}>
        {blog.tags.map((tag) => (
          <Text key={tag} style={styles.tag}>
            {tag}
          </Text>
        ))}
      </View>
      <Text style={styles.content}>{blog.content}</Text>

      {/* If the blog has multiple images (e.g., a list of image URLs), you can render them here */}
      {/* {blog.images && Array.isArray(blog.images) && blog.images.length > 0 && (
        <ScrollView horizontal style={styles.imageGallery}>
          {blog.images.map((uri: string, index: number) => (
            <Image key={index} source={{ uri }} style={styles.blogImage} />
          ))}
        </ScrollView>
      )} */}
    </ScrollView>
  );
};

export default BlogDetailScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  writerName: {
    fontSize: 18,
    fontWeight: '600',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 12,
  },
  tag: {
    backgroundColor: '#eee',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginRight: 6,
    marginBottom: 6,
    fontSize: 12,
  },
  content: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 16,
  },
  imageGallery: {
    marginVertical: 16,
  },
  blogImage: {
    width: 200,
    height: 150,
    borderRadius: 8,
    marginRight: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
});
