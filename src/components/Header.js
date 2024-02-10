import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Buttons, Colors, Typography} from '../styles';

const Header = () => {
  return (
    <View>
      <Text>Header</Text>
    </View>
  );
};

const BigHeader = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{title}</Text>
    </View>
  );
};
export {Header, BigHeader};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    ...Typography.header.x70,
  },
});
