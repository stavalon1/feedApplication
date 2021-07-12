import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput,
  TouchableOpacity, ActivityIndicator, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AA from './screens/addProduct'
import BB from './screens/feed' 
import {navigationRef} from './navigation/root';
const Stack = createStackNavigator();

export default function App() {
   return (
     
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Products" component={BB} />
    <Stack.Screen name="AddProduct" component={AA} />
    </Stack.Navigator>
    </NavigationContainer>
 )
  
}

const styles = StyleSheet.create({
  feedBtn: { width: '50%', backgroundColor: '#761954', alignItems: 'center', justifyContent: 'center' },
  addButton: { width: '50%', backgroundColor: '#e1c13b', alignItems: 'center', justifyContent: 'center' },
  mainView: { height: '90%', width:'100%', alignItems: 'center', justifyContent: 'center', flex:1 },
  btnText: { color: '#ffffff', fontSize: 20 },
  menuView: { height: '10%', flexDirection: 'row', justifyContent: 'space-between' },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
