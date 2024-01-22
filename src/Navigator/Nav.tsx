import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import MainNav from './MainNav';
import Splash from '../screens/Splash';

export type StackNavigatorParamList = {
  Splash: undefined;
  MainNav: undefined;
};

const Stack = createStackNavigator<StackNavigatorParamList>();

function Nav(): JSX.Element {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{gestureEnabled: false, headerShown: true}}>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainNav"
        component={MainNav}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
export default Nav;
