import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './pages/screens/HomeScreen'; 
import GreenSpaceScreen from './pages/screens/GreenSpaceScreen';
import DownloadScreen from './pages/screens/DownloadScreen';
import SupportScreen from './pages/screens/SupportScreen';
import RegisterScreen from './pages/screens/RegisterScreen';
import LoginScreen from './pages/screens/LoginScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstScreen">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Green Space" component={GreenSpaceScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Download" component={DownloadScreen} />
        <Stack.Screen name="Support" component={SupportScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
