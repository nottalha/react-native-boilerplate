import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Colors, Sizing, Typography} from '../styles';
import {BlurView} from '@react-native-community/blur';

const BlurButton = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const GlassButton = ({onPress, title}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonBlur}>
      <BlurView
        overlayColor=""
        style={styles.blurView}
        blurType="light"
        blurAmount={10}
        reducedTransparencyFallbackColor="powderblue" // Fallback color in case of reduced transparency support
      >
        <Text style={styles.textBlur}>{title}</Text>
      </BlurView>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.3)', // Adjust opacity as needed
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.9)', // Adjust opacity as needed
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 13.84,
    elevation: 25,
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
  buttonBlur: {
    borderRadius: 10,
    overflow: 'hidden',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderWidth: 0.5,
    borderColor: 'silver',
    height: Sizing.x50,
    width: '90%',
  },
  blurView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  textBlur: {
    fontSize: 19,
    color: Colors.neutral.white,
    textShadowColor: 'rgba(0, 0, 0, 0.5)', // Shadow color
    textShadowOffset: {width: 1, height: 2}, // Shadow offset
    textShadowRadius: 5, // Shadow radius
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export {GlassButton, BlurButton};
