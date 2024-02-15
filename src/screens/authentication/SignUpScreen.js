import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Buttons, Typography} from '../../styles';
import {GlassView} from '@metafic-co/react-native-glassmorphism';
import {BigHeader} from '../../components/Header';

const SignUpScreen = ({navigation}) => {
  const handleNavigation = () => navigation.navigate('LandingScreen');
  return (
    <View style={styles.container}>
      <BigHeader title={'Sign Up'} />
      <View style={styles.glassContainer}>
        <TouchableOpacity
          style={Buttons.bar.primary}
          onPress={handleNavigation}>
          <Text style={Buttons.barText.primary}>Go to - Main Activity</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1}} />
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
  glassContainer: {
    flex: 1,
    width: '80%',
    justifyContent: 'space-around',
  },
  section: {
    flex: 3,
    ...Typography.section,
  },
});
