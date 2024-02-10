import React, {useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Buttons, Colors, Typography} from '../../styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const LandingScreen = () => {
  const navigation = useNavigation();
  // const [user, setUser] = useState(null);

  // const handleStoredData = async () => {
  //   try {
  //     const userData = await AsyncStorage.getItem('@user');
  //     const parsedUserData = JSON.parse(userData);
  //     if (parsedUserData && parsedUserData.username) {
  //       setUser(parsedUserData);
  //       navigation.replace('MainStack');
  //     } else navigation.replace('Authentication');
  //   } catch (error) {
  //     Alert.alert('Login Error:', error);
  //   }
  // };

  const handleNavigation = () => navigation.navigate('Authentication');

  const handleRootNavigation = () => navigation.navigate('RootStack');

  return (
    <View style={styles.container}>
      <Text style={{}}>Loading Page</Text>
      <TouchableOpacity style={Buttons.bar.primary} onPress={handleNavigation}>
        <Text style={Buttons.barText.primary}>Go to - Authentication</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={Buttons.bar.primary}
        onPress={handleRootNavigation}>
        <Text style={Buttons.barText.primary}>Go to - RootStack</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LandingScreen;

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
