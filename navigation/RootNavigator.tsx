import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from '../screens/OnboardingScreen';
import MainNavigator from './MainNavigator';
import { AuthContext } from '../context/AuthContext';

export type RootStackParamList = {
  Onboarding: undefined;
  Main: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const { role } = useContext(AuthContext);

  // If role is not selected, show onboarding; else, show the main app.
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {role === null ? (
        <Stack.Screen name="Onboarding" component={OnboardingScreen}/>
      ) : (
        <Stack.Screen name="Main" component={MainNavigator} />
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;
