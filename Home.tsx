import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import MainTabNavigator from './navigation/MainTabNavigator';
import MusicScreen from './Screens/MusicScreen'
import AlbumScreen from './Screens/AlbumScreen'
import {StyleSheet, Image } from 'react-native'
import VideoDetailsScreen from './Screens/VideoDetailsScreen';
import VideoScreen from './Screens/VideoScreen';

const Stack = createStackNavigator();

const Home = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="navigator" component={MainTabNavigator} options={{  title: "",
        headerLeft: () => (
          <Image source={require("./assets/images/AlphaBlack.png")} style={{width: 30, height: 30, marginLeft: 20}} resizeMode="contain" />
        ),
        headerTitleStyle: {color: '#367f86', fontSize: 15},}}/>
        <Stack.Screen name="MainScreen" component={MainTabNavigator}  />
        <Stack.Screen name="Music" component={MusicScreen} />
        <Stack.Screen name="AlbumScreen" component={AlbumScreen} options={{  title: "",}} />
        <Stack.Screen name="Video" component={VideoScreen} options={{  title: "",}}/>
        <Stack.Screen name="VideoScreen" component={VideoDetailsScreen} options={{  title: "",}}/>
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
export default Home
