import React from 'react';
import {View, StyleSheet} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import {Colors} from '../styles';

const GlassContainer = ({children}) => {
  return (
    <BlurView style={styles.blurView} blurType="light" blurAmount={10}>
      <View style={styles.container}>{children}</View>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  blurView: {
    width: '95%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: 10,
    flex: 1,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    padding: '10%',
    borderWidth: 1,
    borderColor: Colors.transparent.lightGray,
    //     borderColor: Colors.neutral.s250,
  },
});

export default GlassContainer;
