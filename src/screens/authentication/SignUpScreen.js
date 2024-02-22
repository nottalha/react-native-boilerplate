import {Button, StyleSheet, View} from 'react-native';
import React from 'react';
import {BackgroundImageGlass} from '../../components/Background';
import {BigHeader} from '../../components/Header';

const SignUpScreen = ({navigation}) => {
  const handleNavigation = () => navigation.navigate('RootStack');

  console.log('sign up');
  console.debug('focus');

  return (
    <BackgroundImageGlass>
      {/* <BigHeader title={'Sign Up'} /> */}

      {/* <View style={styles.container}></View> */}
      {/* <View style={styles.container}> */}
      {/* <TextInputBlur label={'Email'} />
        <TextInputBlur label={'Password'} /> */}
      {/* <TextInput label={'pass'} /> */}
      {/* </View> */}
      {/* <GlassButton title={' - Sign In'} onPress={handleNavigation} /> */}
      {/* <View style={{flex: 1}} /> */}

      <BigHeader title={'Sign UP'} />

      <View style={styles.container}>
        {/* <TextInputBlur label={'Email'} />
  <TextInputBlur label={'Password'} /> */}
        {/* <TextInput label={'pass'} /> */}
      </View>
      {/* <GlassButton title={' - Sign In'} onPress={handleNavigation} /> */}
      <Button title="Root" onPress={handleNavigation} />

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
    justifyContent: 'space-around',
  },
  glassContainer: {
    flex: 1,
    width: '80%',
    justifyContent: 'space-around',
  },
});
