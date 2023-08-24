import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WebViewScreen from './src/WebViewScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import DummyScreen from './src/DummyScreen';
import AnotherDummyScreen from './src/AnotherDummyScreen';
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen name="home" component={WebViewScreen} options={{tabBarLabel: 'Home',tabBarIcon: ({ tintColor }) => (
        <Icon name="home" size={20}/>
      )}} />
       <Tab.Screen name="random" component={DummyScreen} options={{tabBarLabel: 'random',tabBarIcon: ({ tintColor }) => (
        <Icon name="home" size={20}/>
      )}} />
       <Tab.Screen name="another" component={AnotherDummyScreen} options={{tabBarLabel: 'another',tabBarIcon: ({ tintColor }) => (
        <Icon name="home" size={20}/>
      )}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
