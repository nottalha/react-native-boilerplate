import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {GlassButton} from '../../components/Button';
import {BigHeader} from '../../components/Header';
import {BackgroundImageGlass} from '../../components/Background';
import { GlassContainer } from '../../components/GlassContainer';

const LandingScreen = () => {
  const navigation = useNavigation();

  const handleNavigation = () => navigation.navigate('Authentication');
  const handleRootNavigation = () => navigation.navigate('RootStack');

  useEffect(() => {
    navigation.replace('Authentication');
  }, []);

  return (
    <View style={styles.container}>
      <BackgroundImageGlass>
        <BigHeader title={'Welcome'} />
        <GlassContainer style={styles.glassContainer}>
          <GlassButton
            title={'Go to - Authentication'}
            onPress={handleNavigation}
          />
          <GlassButton
            title={'Go to - RootStack'}
            onPress={handleRootNavigation}
          />
        </GlassContainer>
        {/* <Filter /> */}
        <View style={{flex: 1}} />
      </BackgroundImageGlass>
    </View>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  glassContainer: {
    flex: 1,
    justifyContent: 'space-around',
  },
});
