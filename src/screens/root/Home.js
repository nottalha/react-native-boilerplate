import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BackgroundImageGlass} from '../../components/Background';
import {BigHeader} from '../../components/Header';
import {GlassContainer2} from '../../components/GlassContainer';
import {ScrollView} from 'react-native-gesture-handler';
import {BlurButton, GlassButton} from '../../components/Button';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';

function HomeScreen() {
  const bottomTabBarHeight = useBottomTabBarHeight();
  return (
    <BackgroundImageGlass>
      {/* <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}> */}
      <BigHeader title={'Home'} />
      <GlassContainer2 viewStyle={styles.container}>
        <FlatList
          data={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
          contentContainerStyle={[
            styles.listContainer,
            {paddingBottom: bottomTabBarHeight},
          ]}
          style={{width: '100%'}}
          // scrollEnabled={false}
          renderItem={({item, index}) => {
            return (
              <>
                <GlassButton
                  title={`Go to - ${index}`}
                  //   onPress={handleNavigation}
                />
              </>
            );
          }}
        />
      </GlassContainer2>
      {/* <BigHeader title={'Footer'} /> */}

      {/* </View> */}
    </BackgroundImageGlass>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 4,
    marginVertical: '5%',
  },
  listContainer: {
    flexGrow: 1,
    padding: 10,
    paddingVertical: 16,
    gap: 50,
  },
});
