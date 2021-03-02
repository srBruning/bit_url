import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import Preload from '../pages/Preload';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Stack = createStackNavigator();

export  default () => (
    <Stack.Navigator
        initialRouteName="Preload"
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="Preload" component={Preload} /> 
        <Stack.Screen name="SignIn" component={SignIn} /> 
        <Stack.Screen name="SignUp" component={SignUp} /> 
        <Stack.Screen name="Home" component={Home} /> 
    </Stack.Navigator>
);