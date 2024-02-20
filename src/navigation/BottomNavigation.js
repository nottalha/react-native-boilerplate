import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigation} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {StyleSheet, View} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import ProfileScreen from '../screens/root/Profile';
import HomeScreen from '../screens/root/Home';
import SettingsScreen from '../screens/root/Seetting';
import {BlurView} from '@react-native-community/blur';

const Tab = createBottomTabNavigator();
export default function BottomNavigationS() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          width: '98%',
          // alignSelf: 'center',
          marginHorizontal: '1%',
        },
        tabBarBackground: () => (
          <View
            style={{
              ...StyleSheet.absoluteFill,
              overflow: 'hidden',
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
            }}>
            <BlurView
              // blurAmount={80}
              // blurType='regular'
              style={{
                flex: 1,
                backgroundColor: 'transparent',
              }}
            />
          </View>
        ),
      }}
      sceneContainerStyle={{backgroundColor: 'powderblue', bottom: 0}}
      // initialRouteName="HomeScreen"
      // tabBar={({navigation, state, descriptors, insets}) => (
      //   <BottomNavigation.Bar
      //     shifting
      //     compact
      //     navigationState={state}
      //     activeColor={'purple'}
      //     safeAreaInsets={insets}
      //     activeIndicatorStyle={'red'}

      //     style={{
      //       width: '80%',
      //       alignSelf: 'center',
      //       backgroundColor: 'pink',
      //       position: 'absolute',
      //       marginHorizontal: '10%',
      //       borderRadius: 10,
      //       overflow: 'hidden',
      //       bottom: 5,
      //     }}
      //     theme={{
      //       colors: {
      //         secondaryContainer: 'transparent',
      //         elevation: {level2: 'white'},
      //       },
      //       roundness: 10,
      //     }}
      //     onTabPress={({route, preventDefault}) => {
      //       const event = navigation.emit({
      //         type: 'tabPress',
      //         target: route.key,
      //         canPreventDefault: true,
      //       });

      //       if (event.defaultPrevented) {
      //         preventDefault();
      //       } else {
      //         navigation.dispatch({
      //           ...CommonActions.navigate(route.name, route.params),
      //           target: state.key,
      //         });
      //       }
      //     }}
      //     renderIcon={({route, focused, color}) => {
      //       //(props: { route: Route; focused: boolean; color: string; }) => React.ReactNode
      //       const {options} = descriptors[route.key];
      //       if (options.tabBarIcon) {
      //         return options.tabBarIcon({
      //           focused,
      //           color: focused ? 'purple' : 'grey',
      //           size: focused ? 28 : 24,
      //         });
      //       }
      //       return null;
      //     }}
      //     getColor={({route}) => {}}
      //     getLabelText={({route}) => {
      //       const {options} = descriptors[route.key];
      //       const label =
      //         options.tabBarLabel !== undefined
      //           ? options.tabBarLabel
      //           : options.title !== undefined
      //           ? options.title
      //           : route.title;

      //       return label;
      //     }}
      //   />
      // )}
      //
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => {
            return <Icon name="home-outline" size={size} color={color} />;
          },
        }}
      />

      <Tab.Screen
        name="SettingsScreen"
        component={SettingsScreen} // push LoginScreen warning here
        options={{
          tabBarLabel: 'setting',
          tabBarIcon: ({color, size}) => {
            return <Icon name="cog-outline" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen} // push LoginScreen warning here
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({color, size}) => {
            return <Icon name="account-outline" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
