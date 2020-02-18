import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@screens/home/HomeScreen';
import LoginScreen from '@screens/login/LoginScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
      <Stack.Screen name="Home">
        {() => (
          <Tab.Navigator>
            <Tab.Screen name="Profile" component={HomeScreen}></Tab.Screen>
          </Tab.Navigator>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

const AuthStackNavigator = () => {};

export default AppStackNavigator;
