import React, { useEffect } from 'react';
import {Text, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ExchangeScreen from './screens/ExchangeScreen';
import HomeScreen from './screens/HomeScreen';
import TagsScreen from './screens/TagsScreen';
import ProfileScreen from './screens/ProfileScreen';
import SearchScreen from './screens/SearchScreen';
import Icon from '@react-native-vector-icons/fontawesome5';

const Tab = createBottomTabNavigator();

function App() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  });
  return (
  <NavigationContainer>
    <Tab.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
      <Tab.Screen 
        name="Exchanges" 
        component={ExchangeScreen} 
        options={{
          tabBarIcon: ({focused}) => {
        return (
          <Icon name="exchange-alt" iconStyle="solid" color={focused ? '#1263CE' : '#a0a0a0a0'}
          size={16}
          />
        );
      },
      }}
      />
      <Tab.Screen name="Tags" component={TagsScreen} options={{tabBarIcon: ({focused}) => { 
        return (
          <Icon name="tags" iconStyle="solid" color={focused ? '#1263CE' : '#a0a0a0a0'} size={16}/>
        )
      }}} />
      <Tab.Screen name="Home" component={HomeScreen} options={{tabBarIcon: ({focused}) => {
        return (
          <Icon name="home" iconStyle="solid" color={focused ? '#1263CE' : '#a0a0a0a0'} size={16}/>
        )
      }}} />
      <Tab.Screen name="Search" component={SearchScreen} options={{tabBarIcon: ({focused}) => {
        return (
          <Icon name="search" iconStyle="solid" color={focused ? '#1263CE' : '#a0a0a0a0'} size={16}/>
        )
      }}}
          />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{tabBarIcon: ({focused}) => {
        return (
          <Icon name="user" iconStyle="solid" color={focused ? '#1263CE' : '#a0a0a0a0'} size={16}/>
        )
      }}}
          />
    </Tab.Navigator>
  </NavigationContainer>
  );
}

export default App;