import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Import the screens for your five tabs and the CurrentDrive screen
import Tab1Screen from './screens/Tab1Screen';
import Tab2Screen from './screens/Tab2Screen';
import Tab3Screen from './screens/Tab3Screen';
import Tab4Screen from './screens/Tab4Screen';
import Tab5Screen from './screens/Tab5Screen';
import CurrentDrive from './screens/CurrentDrive';  // Make sure this path is correct

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();  // Stack navigator

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Drive" component={Tab1Screen} options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="car-outline" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="Queue" component={Tab2Screen} options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="list-outline" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="Profile" component={Tab3Screen} options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="person-circle-outline" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="Stats" component={Tab4Screen} options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="stats-chart" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="About" component={Tab5Screen} options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="help-circle-outline" color={color} size={size} />
        ),
      }} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MyTabs">
        <Stack.Screen name="MyTabs" component={MyTabs} options={{ headerShown: false }} />
        <Stack.Screen name="CurrentDrive" component={CurrentDrive} />
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
