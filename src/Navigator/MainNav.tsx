import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import BottomNavigator from './BottomNavigator';

export type StackNavigatorParamList = {
  BottomNavigator: undefined;
};

const Stack = createStackNavigator<StackNavigatorParamList>();

function MainNav(): JSX.Element {
  return (
    <Stack.Navigator
      initialRouteName="BottomNavigator"
      screenOptions={{gestureEnabled: false, headerShown: false}}>
      <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
    </Stack.Navigator>
  );
}

export default MainNav;