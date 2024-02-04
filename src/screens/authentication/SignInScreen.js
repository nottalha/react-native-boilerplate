import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors, Typography} from '../../styles';

const SignInScreen = () => {
  console.log('AppNavigator 5');
  return (
    <View style={styles.container}>
      <Text style={{}}>SignInScreen</Text>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary.s200,
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
