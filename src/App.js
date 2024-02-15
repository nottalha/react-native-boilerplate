import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {
  Button,
  Provider as PaperProvider,
  DefaultTheme,
} from 'react-native-paper';

const App = () => {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#660033', // Adjust opacity as needed
    },
    roundness: 10, // Adjust input roundness as needed
  };
  return (
    <PaperProvider theme={theme}>
      <GestureHandlerRootView style={{flex: 1}}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </GestureHandlerRootView>
    </PaperProvider>
  );
};

export default App;
