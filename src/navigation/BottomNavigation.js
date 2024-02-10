import React from 'react';
import {Colors} from '../styles';
import {BottomNavigation} from 'react-native-paper';
import {CommonActions} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SignUpScreen from '../screens/authentication/SignUpScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileScreen from '../screens/root/Profile';

const Tab = createBottomTabNavigator();
export default function BottomNavigationS() {
  console.log('AppNavigator 7');
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      // initialRouteName="ProfileScreen"
      tabBar={({navigation, state, descriptors, insets}) => (
        <BottomNavigation.Bar
          shifting
          compact
          navigationState={state}
          activeColor={Colors.primary.brand}
          safeAreaInsets={insets}
          style={{height: 65}}
          theme={{
            colors: {
              secondaryContainer: 'transparent',
              elevation: {level2: 'white'},
            },
            roundness: 1,
          }}
          onTabPress={({route, preventDefault}) => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (event.defaultPrevented) {
              preventDefault();
            } else {
              navigation.dispatch({
                ...CommonActions.navigate(route.name, route.params),
                target: state.key,
              });
            }
          }}
          renderIcon={({route, focused, color}) => {
            //(props: { route: Route; focused: boolean; color: string; }) => React.ReactNode
            const {options} = descriptors[route.key];
            if (options.tabBarIcon) {
              return options.tabBarIcon({
                focused,
                color: focused ? Colors.primary.brand : 'grey',
                size: focused ? 28 : 24,
              });
            }
            return null;
          }}
          getColor={({route}) => {}}
          getLabelText={({route}) => {
            const {options} = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.title;

            return label;
          }}
        />
      )}>
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        color="yellow"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => {
            return (
              <Icon
                name="home"
                size={size}
                color={color}
                // borderRadius={10}
                // borderWidth={1}
                // style={{backgroundColor: 'red', overflow: 'hidden'}}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="TripHistoryScreen"
        component={SignUpScreen}
        options={{
          tabBarLabel: 'Trip',
          tabBarIcon: ({color, size}) => {
            return (
              <Icon name="calendar-clock-outline" size={size} color={color} />
            );
          },
        }}
      />
      {/* <Tab.Screen
        name="ProfileScreen"
        component={ProfileLandingScreen} // push LoginScreen warning here
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => {
            return <Icon name="account-outline" size={size} color={color} />;
          },
        }}
      /> */}
    </Tab.Navigator>
  );
}
