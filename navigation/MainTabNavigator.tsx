
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { MainTabParamList } from '../types';
import { Entypo, MaterialIcons } from '@expo/vector-icons'
import MusicScreen from '../Screens/MusicScreen'
import VideoScreen from '../Screens/VideoScreen';
import VideoDetailsScreen from '../Screens/VideoDetailsScreen';



const mainTab = createBottomTabNavigator<MainTabParamList>();


export default function MainTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <mainTab.Navigator
      initialRouteName="Music"
      tabBarOptions={{
         activeTintColor: Colors[colorScheme].background,
         style: {
          backgroundColor: Colors[colorScheme].tint,
         },
         labelStyle: {
           fontWeight: 'bold',
         },
         }}
         >
      <mainTab.Screen
        name="Music"
        component={MusicScreen}
        options={{
          tabBarIcon: ({ color: string }) => <Entypo name="folder-music" size={21} color="#367f86" />,
          tabBarLabel: () => null
        }}
      />
      <mainTab.Screen
        name="Videos"
        component={VideoScreen}
        options={{
          tabBarIcon: ({ color: string }) => <MaterialIcons name="video-collection" size={23} color="#367f86" />,
          tabBarLabel: () => null
        }}
      />
    </mainTab.Navigator>
  );
}

function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}
