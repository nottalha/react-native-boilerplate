import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Buttons, Typography} from '../../styles';

const SignUpScreen = ({navigation}) => {
  const handleNavigation = () => navigation.navigate('LandingScreen');
  return (
    <View style={styles.container}>
      <Text style={{}}>SignInScreen</Text>
      <TouchableOpacity style={Buttons.bar.primary} onPress={handleNavigation}>
        <Text style={Buttons.barText.primary}>Go to - Main Activity</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    ...Typography.header.x70,
  },
  section: {
    flex: 3,
    ...Typography.section,
  },
});
