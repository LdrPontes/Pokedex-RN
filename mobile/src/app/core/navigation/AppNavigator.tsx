import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigator from '../../home/HomeNavigator';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {AuthNavigator(Stack)}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
