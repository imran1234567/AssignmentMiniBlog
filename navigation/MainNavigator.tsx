import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BlogsStackNavigator from '../navigation/BlogsStackNavigator';
import MapScreen from '../screens/MapScreen';
import ChatScreen from '../screens/ChatScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Blogs') {
            iconName = focused ? 'book' : 'book-outline';
          } else if (route.name === 'Map') {
            iconName = focused ? 'map' : 'map-outline';
          } else if (route.name === 'Chat') {
            iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#FFF', // Active tab color
        tabBarInactiveTintColor: 'gray', // Inactive tab color
        tabBarStyle: {
          backgroundColor: 'black', // ✅ Set tab container to black
          borderTopWidth: 0, // Optional: Removes top border
        },
      })}
    >
      <Tab.Screen name="Blogs" component={BlogsStackNavigator} />
      <Tab.Screen name="Map" component={MapScreen} options={{ title: 'Map' , headerShown: true}}/>
      <Tab.Screen name="Chat" component={ChatScreen} options={{ title: 'Chat' , headerShown: true}} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
