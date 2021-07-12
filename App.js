import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput,
  TouchableOpacity, ActivityIndicator, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddProducts from './screens/addProduct';
import feedScreen from './screens/feed'; 
import {navigationRef} from './navigator/rootNavigation';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Products" component={feedScreen} />
    <Stack.Screen name="AddProduct" component={AddProducts} />
    </Stack.Navigator>
    </NavigationContainer>
 )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
