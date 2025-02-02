import React, { useState } from 'react';
import { View, FlatList, TextInput, StyleSheet, Pressable, Text } from 'react-native';
import BlogCard from '../components/BlogCard';
import blogsData from '../data/blogs.json'; // Assume you have JSON data
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BlogsStackParamList } from '../navigation/BlogsStackNavigator';
import { useNavigation } from '@react-navigation/native';

const BlogListScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredBlogs, setFilteredBlogs] = useState(blogsData);
  const navigation = useNavigation<NativeStackNavigationProp<BlogsStackParamList>>();

  // Simple filter function (expand as needed for expertise and language)
  const handleSearch = (text: string) => {
    setSearchText(text);
    const filtered = blogsData.filter(blog =>
      blog.writer.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredBlogs(filtered);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search by writer name..."
        value={searchText}
        onChangeText={handleSearch}
        
      />
      {/* Additional filter UI (e.g., dropdowns for expertise or language) can go here */}
      <FlatList
        data={filteredBlogs}
        keyExtractor={item => item.id}
        ListHeaderComponent={<>
          <View style={{flexDirection:'row', justifyContent:'flex-end', marginBottom: 15, marginHorizontal: 15}}>
            <Pressable onPress={() => navigation.navigate('CreateBlog')} style={{padding: 10, backgroundColor:'#000', borderRadius: 8, alignItems:'center'}}> 
              <Text style={{color: '#fff'}}>+ Create Blog</Text>
            </Pressable>
          </View>
        </>}
        renderItem={({ item }) => <BlogCard blog={item} />}
      />
    </View>
  );
};

export default BlogListScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  input: { height: 45 , borderColor: '#ccc', borderWidth: 1, borderRadius: 8, marginBottom: 10, paddingHorizontal: 8 , marginHorizontal: 15, backgroundColor: '#fff' },
});
