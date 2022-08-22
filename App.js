import React from 'react';
import {
  View,Text
} from 'react-native';
import Login from './components/login';
import Profile from './components/profile';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App = ()=>{
  const Stack = createNativeStackNavigator();
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Profile' component={Profile}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  )
}

export default App;