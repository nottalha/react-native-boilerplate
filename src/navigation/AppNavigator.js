import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingScreen from '../screens/Splash/LandingScreen';
import Authentication from '../route/Authentication';
import RootStack from '../route/RootStack';
// import MainStack from '../route/MainRoute';
// import LocalizationScreen from '../screens/Splash/LocalizationScreen';
// import SearchModal from '../screens/popup/SearchModal';
// import MapScreen from '../screens/maps/ListView';
// import MapItem from '../screens/maps/SingleView';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="LandingScreen" component={LandingScreen} />
      <Stack.Screen name="Authentication" component={Authentication} />
      <Stack.Screen name="RootStack" component={RootStack} />
      {/* 
      <Stack.Screen name="Localization" component={LocalizationScreen} />
      // check SearchModal not in use 
      <Stack.Screen name="SearchModal" component={SearchModal} />
      <Stack.Screen name="MapScreen" component={MapScreen} />
      <Stack.Screen name="MapItem" component={MapItem} /> */}
      {/* Other screens */}
      {/* Add other screens here */}
    </Stack.Navigator>
  );
};

export default AppNavigator;
