import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import logo from '../assets/Ace_of_spades.svg.png'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from '../styles.js'
import App from '../App.js'
import { Stack } from '../App.js'
import {HomeToNumberTeams} from '../App.js'


  const HomeScreen = (navigation) => {
    return (
        <View style={styles.container}>
          <Text style={styles.mainText}>Game Title</Text>
    
          <Image source = {logo} style = {styles.logo} />
    
          <HomeToNumberTeams />
          <StatusBar style="auto" />
        </View>
      );
  }

  export default HomeScreen;
