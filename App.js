import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Pages

import Tabs from './constant/tabs';
import Notification from './constant/screens/Notification'
import Discount from './constant/screens/Discount'
import FoodView from './constant/screens/foodView'


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName={'Tabs'}
        >
            <Stack.Screen name="Home" component={Tabs} />
            <Stack.Screen name="Notification" component={Notification} />
            <Stack.Screen name="Discount" component={Discount} />
            <Stack.Screen name="FoodView" component={FoodView} />

        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
