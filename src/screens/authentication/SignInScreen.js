import React, {useState} from 'react';
import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Buttons, Typography} from '../../styles';
import {BlurView} from '@react-native-community/blur';

import {BigHeader} from '../../components/Header';
import {TextInputGlass} from '../../components/TextInput';
import {BlurButton, GlassButton} from '../../components/Button';
import {BackgroundImageGlass} from '../../components/Background';
import GlassContainer from '../../components/GlassContainer';

const SignInScreen = ({navigation}) => {
  const [user, setUser] = useState({
    email: null,
    password: null,
  });
  const handleNavigation = () => navigation.navigate('SignUp');

  return (
    <View style={styles.container}>
      <BackgroundImageGlass>
        <BigHeader title={'Sign In'} />
        <GlassContainer>
          <View style={styles.glassContainer}>
            <TextInputGlass label={'Email'} value={user.email} />
            <TextInputGlass label={'Password'} value={user.password} />
            <GlassButton title={'Go to - Sign up'} onPress={handleNavigation} />
          </View>
        </GlassContainer>

        <View style={{flex: 1}} />
      </BackgroundImageGlass>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  glassContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
