import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BackgroundImageGlass} from '../../components/Background';
import {BigHeader} from '../../components/Header';
import {TextInputGlass} from '../../components/TextInput';
import {GlassButton} from '../../components/Button';
import Menu, {GlassContainer, GlassContainer2} from '../../components/GlassContainer';

const ProfileScreen = () => {
  console.log('Profile Screen Here');
  return (
    <BackgroundImageGlass>
      <BigHeader title={'Profile'} />
     <Menu/>
      {/* <Filter /> */}
      <View style={{flex: 1}} />
    </BackgroundImageGlass>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 4,
  },
  glassContainer: {
    // flex: 1,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    flexGrow: 1,
    padding: 10,
    paddingVertical: 16,
    gap: 50,
  },
});
