import React, { useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { Text, View } from 'react-native';
import HomeScreen from './components/review/home';
import DetailScreen from './components/review/detail';
import AboutScreen from './components/review/about';
import { OPENSAN_REGULAR } from './utils/const';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

SplashScreen.preventAutoHideAsync();

const App = () => {
    const [loaded, error] = useFonts({
        [OPENSAN_REGULAR]: require('./assets/fonts/OpenSans-Regular.ttf'),
      });
    
      useEffect(() => {
        if (loaded || error) {
          SplashScreen.hideAsync();
        }
      }, [loaded, error]);
    
      if (!loaded && !error) {
        return null;
      }
      const Stack = createNativeStackNavigator<StackParamList>();
    // 6:0:0
    return (
        
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="home" component={HomeScreen} options={{ title: 'Home' }}/>
          <Stack.Screen name="review-detail" component={DetailScreen} options={{ title: 'Review' }}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
};

export default App;