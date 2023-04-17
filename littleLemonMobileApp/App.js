import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import Onboarding from './screens/Onboarding';
import Home from './screens/Home';
import Profile from './screens/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  const Stack = createNativeStackNavigator();

  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const value = await AsyncStorage.getItem('user');
      if(value !== null)
        setIsLogin(true);
    } catch (error) {
      Alert.alert(error);
    }
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {
          isLogin ? (
            <>
              <Stack.Screen name='Home' component={Home}/>
              <Stack.Screen name='Profile' component={Profile}/>
            </>
          ) : (
            <>
              <Stack.Screen name='Onboarding' component={Onboarding}/>
              <Stack.Screen name='Home' component={Home}/>
              <Stack.Screen name='Profile' component={Profile}/>
            </>
          )
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
