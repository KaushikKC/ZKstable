import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, View, TouchableOpacity, Text} from 'react-native';
import Home from '../screens/Home';
import Swap from '../screens/Swap';
import Vault from '../screens/Vault';
import Profile from '../screens/Profile';


const Bottom = createBottomTabNavigator();

function BottomNavigator({navigation}: {navigation: any}): JSX.Element {
  const screenOptions = {
    showIcon: true,
    showLabel: false,
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: {
      backgroundColor: 'transparent',
      borderRadius: 50,
      height: 64,
      marginHorizontal: 16,
      marginBottom: 16,
      borderWidth: 1,
      borderColor: '#1E1E1E',
      shadowOpacity: 0,
      elevation: 0,
      borderTopWidth: 1,
    },
  };

  return (
    <Bottom.Navigator screenOptions={screenOptions}>
      <Bottom.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('../images/Home.png')
                  : require('../images/Home.png')
              }
            />
          ),
        }}
      />
      <Bottom.Screen
        name="Swap"
        component={Swap}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('../images/Swap.png')
                  : require('../images/Swap.png')
              }
            />
          ),
        }}
      />
      <Bottom.Screen
        name="Vault"
        component={Vault}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('../images/Vault.png')
                  : require('../images/Vault.png')
              }
            />
          ),
        }}
      />
      <Bottom.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('../images/Profile.png')
                  : require('../images/Profile.png')
              }
            />
          ),
        }}
      />
    </Bottom.Navigator>
  );
}

export default BottomNavigator;