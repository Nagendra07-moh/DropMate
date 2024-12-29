import { View, Text } from 'react-native'
import React from 'react'
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from '../utils/NavigationUtil';
import SplashScreen from '../screen/SplashScreen';
import HomeScreen from '../screen/HomeScreen';
const Stack =createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
        <Stack.Navigator initialRouteName='SplashScreen' screenOptions={{
            headerShown:false
        }}>
            <Stack.Screen name='SplashScreen' component={SplashScreen}/>
            <Stack.Screen name='HomeScreen' component={HomeScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation