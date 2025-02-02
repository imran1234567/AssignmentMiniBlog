import React from 'react';
import { StyleSheet, Dimensions, View, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import bloggersData from '../data/bloggers.json'; // Ensure each blogger has a latitude and longitude
import { Ionicons } from '@expo/vector-icons';

const MapScreen = ({ navigation }: { navigation: any }) => {
  const initialRegion = {
    latitude: 20.5937,
    longitude: 78.9629,
    latitudeDelta: 10,
    longitudeDelta: 10,
  };

  return (
    <MapView style={styles.map} initialRegion={initialRegion}>
      {bloggersData.map((blogger) => (
        <Marker
          key={blogger.id}
          coordinate={{ latitude: blogger.latitude, longitude: blogger.longitude }}
          title={blogger.name}
          description={blogger.expertise}
        >
          <TouchableOpacity onPress={() => navigation.navigate('Profile', { bloggerId: blogger.id })}>
            <View style={styles.marker}>
              <Ionicons name="location" size={30} color="#000" />
            </View>
          </TouchableOpacity>
        </Marker>
      ))}
    </MapView>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  map: { flex: 1, width: Dimensions.get('window').width, height: Dimensions.get('window').height },
  marker: { padding: 5, borderRadius: 5 },
  markerText: { color: '#fff' },
});
