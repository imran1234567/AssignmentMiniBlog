import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AuthContext, UserRole } from '../context/AuthContext';

const MiniBlogsScreen = () => {
  const { setRole } = useContext(AuthContext);

  const handleSelectRole = (role: UserRole) => {
    setRole(role);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Mini Blogs</Text>
      <Text style={styles.subtitle}>Select your role:</Text>
      <View style={styles.roleContainer}>
        <TouchableOpacity style={styles.btnContent} onPress={()=> {handleSelectRole('poster')}}>
          <Text style={{ color: '#fff' }}>Blog Poster</Text>
        </TouchableOpacity>
        <Text style={styles.separator}>Or</Text>
        <TouchableOpacity style={styles.btnContent} onPress={()=> {handleSelectRole('viewer')}}>
          <Text style={{ color: '#fff' }}>Blog Reader</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MiniBlogsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#000',
    marginBottom: 20,
  },
  roleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnContent: {
    backgroundColor: 'rgba(0, 0, 0, 1)', // Slightly transparent black
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginHorizontal: 10,
  },
  separator: {
    color: '#000',
    fontSize: 16,
  },
});
