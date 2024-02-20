import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Buttons, Typography} from '../../styles';
import {BigHeader} from '../../components/Header';
import {BackgroundImageGlass} from '../../components/Background';
import {GlassContainer3} from '../../components/GlassContainer';
import {GlassButton} from '../../components/Button';

const SignUpScreen = ({navigation}) => {
  const handleNavigation = () => navigation.navigate('RootStack');

  console.log('sign up');
  return (
    <BackgroundImageGlass>
      <BigHeader title={'Sign Up'} />

      {/* <View style={styles.container}></View> */}
      <GlassContainer3 viewStyle={styles.container}>
        <GlassButton title={'WIn'} />
        <GlassButton title={'WIn'} />
        <GlassButton title={'WIn'} />
        <GlassButton title={'WIn'} />
      </GlassContainer3>
      <View style={{flex: 1}} />
    </BackgroundImageGlass>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 3,
    width: '90%',
    alignItems: 'center',
    marginVertical: '10%',
    justifyContent: 'space-around',
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
