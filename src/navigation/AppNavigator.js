import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingScreen from '../screens/Splash/LandingScreen';

import Authentication from '../route/Authentication';
import RootStack from '../route/Root';

const Stack = createNativeStackNavigator();

const AppNavigator = ({isSignedIn}) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="LandingScreen" component={LandingScreen} />
      <Stack.Screen name="RootStack" component={RootStack} />
      <Stack.Screen name="Authentication" component={Authentication} />
      {/* check SearchModal not in use */}
      {/* Other screens */}
      {/* Add other screens here */}
    </Stack.Navigator>
  );
};

export default AppNavigator;
