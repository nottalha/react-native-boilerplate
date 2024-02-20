import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';

const BackgroundImageGlass = ({children}) => {
  return (
    <ImageBackground
      source={require('../assets/images/choco.jpeg')} // Change the path to your background image
      style={styles.background}
      resizeMode="cover">
      {children}
    </ImageBackground>
  );
};

export {BackgroundImageGlass};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    justifyContent: 'center', // Adjust alignment as needed
    alignItems: 'center', // Adjust alignment as needed
  },
});
