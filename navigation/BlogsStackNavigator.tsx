import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BlogListScreen from '../screens/BlogListScreen';
import BlogDetailScreen from '../screens/BlogDetailScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CreateBlogScreen from '../screens/CreateBlogScreen';

export type BlogsStackParamList = {
  BlogList: undefined;
  BlogDetail: { blogId: string };
  Profile: { bloggerId: string };
  CreateBlog: undefined;
};

const Stack = createNativeStackNavigator<BlogsStackParamList>();

const BlogsStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BlogList" component={BlogListScreen} options={{ title: 'Blogs' }} />
      <Stack.Screen name="BlogDetail" component={BlogDetailScreen} options={{ title: 'Blog Details' }} />
      <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Blogger Profile' }} />
      <Stack.Screen name="CreateBlog" component={CreateBlogScreen} options={{ title: 'Post a Blog' }} />
    </Stack.Navigator>
  );
};

export default BlogsStackNavigator;
