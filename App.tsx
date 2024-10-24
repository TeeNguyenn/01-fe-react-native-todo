import React, { useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { Text, View } from 'react-native';
import HomeScreen from './components/review/home';
import DetailScreen from './components/review/detail';
import AboutScreen from './components/review/about';
import { OPENSAN_REGULAR } from './utils/const';
import AppNavigation from './components/navigation/app.navigation';
import { NavigationContainer } from '@react-navigation/native';



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
      
    // 6:0:0
    return (
        
        <NavigationContainer>
          <AppNavigation/>
      </NavigationContainer>
    );
};

export default App;