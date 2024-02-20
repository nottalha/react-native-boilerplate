import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BackgroundImageGlass} from '../../components/Background';
import {BigHeader} from '../../components/Header';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {GlassButton} from '../../components/Button';

function SettingsScreen() {
  const bottomTabBarHeight = useBottomTabBarHeight();
  return (
    <BackgroundImageGlass>
      <BigHeader title={'Setting'} />
      <View style={styles.container}>
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
              <GlassButton
                title={`Go to - ${index}`}
                //   onPress={handleNavigation}
              />
            );
          }}
        />
      </View>
    </BackgroundImageGlass>
  );
}

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 9,
    width: '100%',
  },
  listContainer: {
    flexGrow: 1,
    padding: 24,
    paddingVertical: 16,
    gap: 50,
  },
});
