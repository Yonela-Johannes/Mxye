import React from 'react';
import { View, Text, StyleSheet, Image, Pressable, ActivityIndicator } from 'react-native';
import videos from '../data/videos'
import { useGetVideoStreamQuery } from '../redux/services/shazam'
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons';
const firstVideo = videos.videos.items[0]
import { ResizeMode } from 'expo-av'
import VideoPlayer from 'expo-video-player'

import {useRoute} from '@react-navigation/native'

const VideoDetailsScreen = () =>  {
  const route = useRoute();
  const { params } = route;

  const headers = new Headers({
    'Accept': 'application/json',
    'Origin': 'https://youtube-v2.p.rapidapi.com',
    'X-RapidAPI-Key': '34ae51b724mshdb30bf885ce3511p1e8f90jsn61649cfcf55f'
  });

  const url = `https://youtube-v2.p.rapidapi.com/video/details/?id=hs1W2KQluWA`
  const request = new Request(url, {
    method: 'GET',
    headers: headers,
    mode: 'cors',
    credentials: 'include'
  });

  fetch(request)
    .then(response => {
      console.log("This is the response!!")
      console.log(response)
    })
    .then(data => console.log(data))
    .catch(error => {
      // handle error
    });

  return <ActivityIndicator />
  const minutes = Math.floor(firstVideo.duration / 60);
  const seconds = firstVideo.duration / 60;

  let viewsString = firstVideo.views.toString();
  if(firstVideo.views >= 1000000){
    viewsString = (firstVideo.views / 1000).toFixed(1) + 'm'
  }else if(firstVideo.views >= 1000){
    viewsString = (firstVideo.views / 1000).toFixed(1) + 'k'
  }else if(firstVideo.views >= 100){
    viewsString = (firstVideo.views / 100).toPrecision(1) + 'h'}

  let followString = videos.follow.toString();
  if(videos.follow >= 1000000){
    followString = (videos.follow / 1000).toFixed(1) + 'm'
  }else if(videos.follow >= 1000){
    followString = (videos.follow / 1000).toFixed(1) + 'k'
  }else if(videos.follow >= 100){
    followString = (videos.follow / 100).toPrecision(1) + 'h'}


  return (
    <View style={styles.container}>
      <View>
      <VideoPlayer
          videoProps={{
            shouldPlay: true,
            resizeMode: ResizeMode.CONTAIN,
            source: {
              uri: data?.formats[0].url,
            },
          }}
        />
      </View>
        <Image style={styles.poster} source={{uri: firstVideo.poster}}/>
        <Text style={styles.duration}>{minutes}:{seconds < 10 ? '0' : ''}</Text>
        <View style={styles.infoContainer}>
          <View style={{alignItems: 'center', justifyContent: 'center', padding: 5}}>
            <Image style={styles.thumbnail} source={{uri: firstVideo.thumbnail}}/>
            <Text style={styles.name}>{videos.name}</Text>
            <Text style={styles.followers}>{followString} <Ionicons name="md-add-circle-outline" size={16} color="black" />
            </Text>
          </View>
          <View style={{padding: 10}}>
            <Text style={styles.description}>{videos.title}</Text>
            <Text style={styles.description}>{viewsString} plays</Text>
            <Text style={styles.description}>{videos.year}</Text>
            {/* <Text style={styles.description}>{firstVideo.description}</Text> */}
          </View>
          <View style={styles.iconsContainer}>
            <Pressable style={{alignItems: 'center'}}>
              <AntDesign name="like2" size={18} color="gray" />
              <Text style={styles.count}>{firstVideo.likes}</Text>
            </Pressable>
            <Pressable style={{alignItems: 'center'}}>
              <AntDesign name="hearto" size={18} color="gray" />
              <Text style={styles.count}>{firstVideo.loves}</Text>
            </Pressable>
            <Pressable style={{alignItems: 'center'}}>
              <Feather name="download" size={18} color="gray" />
              <Text style={styles.count}>{firstVideo.downloads}</Text>
            </Pressable>
            <Pressable style={{alignItems: 'center'}}>
              <Ionicons name="share-outline" size={18} color="gray" />
              <Text style={styles.count}>{firstVideo.shares}</Text>
            </Pressable>
          </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      width: '100%',
    },
    poster: {
        width: "100%",
        aspectRatio: 16/9,
        resizeMode: 'cover'
    },
    infoContainer: {
      flexDirection: 'row',
      backgroundColor: '#49274b',
      alignItems: 'center',
    },
    thumbnail: {
      width: 40,
      height: 40,
      padding: 5,
      marginLeft: 15,
      borderRadius: 50
    },
    duration: {
      position: 'absolute',
      right: 1,
      top: 1,
      color: '#367f86',
      marginRight: 5,
      padding: 2,
      fontSize: 12
    },
    title: {

    },
    name: {
      color: '#367f86',
      fontSize: 12,
      fontWeight: 'bold',
      padding: 5,
    },
    followers: {
      marginLeft: 10,
      fontWeight: 'bold',
      fontSize: 12,
    },
    description: {
      color: 'gray',
      fontSize: 12,
    },
    iconsContainer: {
      width: 160,
      padding: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    count: {
      color: 'gray',
      fontSize: 9,
      padding: 5,
    }
});

export default VideoDetailsScreen;
