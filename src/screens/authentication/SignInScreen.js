import React, {useState} from 'react';
import {
  Button,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Buttons, Typography} from '../../styles';
import {BlurView} from '@react-native-community/blur';

import {BigHeader, Header} from '../../components/Header';
import {TextInputBlur, TextInputGlass} from '../../components/TextInput';
import {BlurButton, GlassButton} from '../../components/Button';
import {BackgroundImageGlass} from '../../components/Background';
import {GlassContainer2} from '../../components/GlassContainer';
import {TextInput} from 'react-native-paper';

const SignInScreen = ({navigation}) => {
  const [user, setUser] = useState({
    email: null,
    password: null,
  });
  const handleNavigation = () => {
    console.log('Sign up vb8');
    navigation.navigate('SignUp');
  };

  return (
    <BackgroundImageGlass>
      <BigHeader title={'Sign In'} />

      <View style={styles.container}>
      
        <TextInputBlur label={'Email'} />
        <TextInputBlur label={'Password'} />
        {/* <TextInput label={'pass'} /> */}
      </View>
      <GlassButton title={' - Sign In'} onPress={handleNavigation} />

      <View style={{flex: 1}} />
    </BackgroundImageGlass>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 3,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  glassContainer: {
    flex: 1,
    // width: '90%',
  },
  listContainer: {
    flexGrow: 1,
    padding: 10,
    paddingVertical: 16,
    gap: 50,
  },
});
