import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Buttons, Colors, Typography} from '../styles';
import {BlurView} from '@react-native-community/blur';

const Header = () => {
  return (
    <View>
      <Text>Header</Text>
    </View>
  );
};

const BigHeader = ({title, style}) => {
  return (
    <View style={styles.container}>
      <BlurView
        style={[styles.blurView, style]}
        blurType="light"
        blurAmount={10}>
        <Text style={styles.header}>{title}</Text>
      </BlurView>
    </View>
  );
};
export {Header, BigHeader};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    borderRadius: 10,
    overflow: 'scroll',
  },
  header: {
    alignSelf: 'center',
    textAlign: 'center',
    ...Typography.header.x70,
    textAlignVertical: 'center',
    color: Colors.neutral.white,
  },
  blurView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
