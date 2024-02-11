import {BlurView} from '@react-native-community/blur';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Colors, Sizing} from '../styles';

const TextInputGlass = props => {
  const {value, label, placeholder} = props;
  return (
    <View style={styles.container}>
      <BlurView style={styles.blurView} blurType="light" blurAmount={10}>
        <TextInput
          value={value}
          label={label}
          style={styles.glass}
          theme={{roundness: 15}} // <---- Here
          textColor={Colors.transparent.darkGray}
          placeholderTextColor={Colors.transparent.clear}
          underlineColor="white"
          placeholder={placeholder}
          {...props}
        />
      </BlurView>
    </View>
  );
};

export {TextInputGlass};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    borderRadius: 15,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  glass: {
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Adjust opacity as needed
  },
  blurView: {},
  textInput: {
    backgroundColor: 'transparent',
    paddingHorizontal: 10,
    // height: 40,
  },
});
