import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  Canvas,
  Fill,
  Image,
  useImage,
  BackdropBlur,
} from '@shopify/react-native-skia';
import {Typography} from '../../styles';
import {GlassButton} from '../../components/Button';
import GlassContainer from '../../components/GlassContainer';
import {BigHeader} from '../../components/Header';
import {BackgroundImageGlass} from '../../components/Background';

const LandingScreen = () => {
  const navigation = useNavigation();
  // const [user, setUser] = useState(null);

  // const handleStoredData = async () => {
  //   try {
  //     const userData = await AsyncStorage.getItem('@user');
  //     const parsedUserData = JSON.parse(userData);
  //     if (parsedUserData && parsedUserData.username) {
  //       setUser(parsedUserData);
  //       navigation.replace('MainStack');
  //     } else navigation.replace('Authentication');
  //   } catch (error) {
  //     Alert.alert('Login Error:', error);
  //   }
  // };

  // https://kazzkiq.github.io/svg-color-filter/
  const BLACK_AND_WHITE = [
    0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0,
  ];
  const Filter = () => {
    const image = useImage(require('../../assets/images/oslo.jpg'));
    // const image = useImage(require('./assets/oslo.jpg'));

    return (
      <Canvas style={{width: 256, height: 256, borderRadius: 10}}>
        <Image image={image} x={0} y={0} width={256} height={256} fit="cover" />
        <BackdropBlur blur={4} clip={{x: 0, y: 128, width: 256, height: 128}}>
          <Fill color="#eeeeee50" />
        </BackdropBlur>
      </Canvas>
    );
  };

  const handleNavigation = () => navigation.navigate('Authentication');

  const handleRootNavigation = () => navigation.navigate('RootStack');

  return (
    <View style={styles.container}>
      <BackgroundImageGlass>
        <BigHeader title={'Welcome'} />
        <GlassContainer>
          <View style={styles.glassContainer}>
            <GlassButton title={'Landing page'} />
            <GlassButton
              title={'Go to - Authentication'}
              onPress={handleNavigation}
            />
            <GlassButton
              title={'Go to - RootStack'}
              onPress={handleRootNavigation}
            />
          </View>
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
