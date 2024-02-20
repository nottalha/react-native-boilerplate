import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import {Colors} from '../styles';

const GlassContainer = ({children, blurStyle, viewStyle}) => {
  return (
    <View style={[styles.container]}>
      <BlurView style={[styles.blurView]} blurType="light" blurAmount={10}>
        {children}
      </BlurView>
    </View>
  );
};
const GlassContainer2 = ({children, blurStyle, viewStyle}) => {
  return (
    <View style={[styles.container, viewStyle]}>
      <BlurView style={[styles.blurView]} blurType="light" blurAmount={10} />
      {children}
    </View>
  );
};
const GlassContainer3 = ({children, blurStyle, viewStyle}) => {
  return (
    <View style={[styles.container2, viewStyle]}>
      <BlurView style={[styles.blurView]} blurType="light" blurAmount={10} />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    overflow: 'hidden',
    borderRadius: 10,
    // alignItems: 'center',
  },
  blurView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  absolute2: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

function Menu() {
  return (
    <View style={styles.container2}>
      <Text style={{}}>Hi, I am some blurred text</Text>
      {/* in terms of positioning and zIndex-ing everything before the BlurView will be blurred */}
      <BlurView
        style={styles.absolute2}
        blurType="light"
        blurAmount={10}
        reducedTransparencyFallbackColor="white"
      />
      <Text>
        I'm the non blurred text because I got rendered on top of the BlurView
      </Text>
    </View>
  );
}

export {GlassContainer, GlassContainer2, GlassContainer3, Menu};
