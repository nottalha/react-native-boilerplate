import React, { useEffect } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Colors, Typography} from '../../styles';

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

  useEffect(() => {
    navigation.navigate('Authentication');
  }, []);
  console.log('AppNavigator 3');
  return (
    <View style={styles.container}>
      <Text>Landing Screen</Text>
    </View>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary.s600,
    alignItems: 'center',
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
