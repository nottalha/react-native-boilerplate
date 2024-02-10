import React, {useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Buttons, Typography} from '../../styles';
import {TextInput} from 'react-native-paper';
import {BigHeader} from '../../components/Header';

const SignInScreen = ({navigation}) => {
  const [user, setUser] = useState({
    email: null,
    password: null,
  });
  const handleNavigation = () => navigation.navigate('SignUp');

  return (
    <View style={styles.container}>
      <BigHeader title={'Sign In'} />
      <View style={styles.glassContainer}>
        <TextInput label={'email'} value={user.email} />
        <TextInput label={'password'} value={user.password} />
        <TouchableOpacity
          style={Buttons.bar.primary}
          onPress={handleNavigation}>
          <Text style={Buttons.barText.primary}>Go to - Sign up</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1}} />
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
    width: '80%',
    justifyContent: 'space-around',
  },
  section: {
    flex: 3,
    ...Typography.section,
  },
});
