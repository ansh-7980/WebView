/**
 * @format
 */
import React, { useEffect, useState } from 'react';
import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import SplashScreen from './Component/SplashScreen';
import WebViewScreen from './src/WebViewScreen';
import App from './App';
const Apps = () => {
    const [appReady, setAppReady] = useState(false);
  
    useEffect(() => {
      setTimeout(() => {
        setAppReady(true);
      }, 3000);
    }, []);
  
    return appReady ? <App/> : <SplashScreen />;
  };
AppRegistry.registerComponent(appName, () => Apps);
