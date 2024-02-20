import React from 'react';
import SignInScreen from '../screens/authentication/SignInScreen';
import SignUpScreen from '../screens/authentication/SignUpScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const AuthenticationStack = createNativeStackNavigator();
export default function Authentication() {
  return (
    <AuthenticationStack.Navigator
      // initialRouteName='SignUp'
      screenOptions={{
        headerShown: false,
        // statusBarColor: 'white',
        statusBarTranslucent: true,
      }}>
      <AuthenticationStack.Screen name="SignIn" component={SignInScreen} />
      <AuthenticationStack.Screen name="SignUp" component={SignUpScreen} />
    </AuthenticationStack.Navigator>
  );
}
