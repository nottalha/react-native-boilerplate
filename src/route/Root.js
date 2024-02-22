import React from 'react';
import BottomNavigation from '../navigation/BottomNavigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function RootStack() {
  return (
    <Stack.Navigator
      // initialRouteName="TravelerDetailScreen"

      screenOptions={{
        headerShown: false,
        animation: 'fade_from_bottom',
      }}>
      <Stack.Screen name="BottomTab" component={BottomNavigation} />
    </Stack.Navigator>
  );
}
