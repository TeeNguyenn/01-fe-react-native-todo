import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../review/home';
import DetailScreen from '../review/detail';
import AboutScreen from '../review/about';

const HomeLayout = () => {
    const Stack = createNativeStackNavigator<StackParamList>();

    return (
        <Stack.Navigator>
            <Stack.Screen name="home" component={HomeScreen} options={{ title: 'Home' }}/>
            <Stack.Screen name="review-detail" component={DetailScreen} options={{ title: 'Review' }}/>
          </Stack.Navigator> 
    )
}

const AppNavigation = () => {
      const Drawer = createDrawerNavigator();
    return (
        <>
          <Drawer.Navigator>
            <Drawer.Screen name="home1" component={HomeLayout}  options={{ title: 'Home' }}/>
            <Drawer.Screen name="about" component={AboutScreen} options={{ title: 'About' }}/>
          </Drawer.Navigator>
        </>
    );
};

export default AppNavigation;