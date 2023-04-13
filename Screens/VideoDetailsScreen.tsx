import React from 'react';
import { View, Text, StyleSheet, Image, Pressable, ActivityIndicator } from 'react-native';
import { useGetVideoStreamQuery, useGetVideoDetailsQuery } from '../redux/services/shazam'
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons';
import { ResizeMode } from 'expo-av'
import VideoPlayer from 'expo-video-player'

import {useRoute} from '@react-navigation/native'

const VideoDetailsScreen = () =>  {
  const route = useRoute();
  const { params } = route;
  const { id } = params
  const {data, isFetching, error} = useGetVideoDetailsQuery(id);
  const {data: streamData, isFetching: fetching} = useGetVideoStreamQuery(id);


  console.log("This is the data my brother:: ",data)

  console.log(data)
  const video = {
    id: data?.videoId,
    title: data?.title,
    name: data?.author.title,
    duration: data?.lengthSeconds,
    poster: data?.thumbnails[0].url,
    description: data?.description,
    thumbnail: data?.author.avatar[0].url,
    videoUri: !streamData?.isProtectedContent ? streamData?.formats[0].url : '',
    likes: String(data?.stats?.likes),
    views: String(data?.stats?.views),
    shares: String(data?.stats.comments)
  }

  console.log("This is the vids brother", video)

  const minutes = Math.floor(video.duration / 60);
  const seconds = video.duration / 60;

  let viewsString = video?.views;
  if(video.views >= 1000000){
    viewsString = (video.views / 1000).toFixed(1) + 'm'
  }else if(video.views >= 1000){
    viewsString = (video.views / 1000).toFixed(1) + 'k'
  }else if(video.views >= 100){
    viewsString = (video.views / 100).toPrecision(1) + 'h'
  }


  let followString = video?.likes;
  if(video?.likes >= 1000000){
    followString = (video?.likes / 1000).toFixed(1) + 'm'
  }else if(video?.likes >= 1000){
    followString = (video?.likes / 1000).toFixed(1) + 'k'
  }else if(video?.likes >= 100){
    followString = (video?.likes / 100).toPrecision(1) + 'h'
  }

  return (
    <View style={styles.container}>
      <View>
        {/* <VideoPlayer
            videoProps={{
              shouldPlay: true,
              resizeMode: ResizeMode.CONTAIN,
              source: {
                uri: video?.videoUri
              },
            }}
          /> */}
      </View>
        <Image style={styles.poster} source={{uri: video.poster}}/>
        <Text style={styles.duration}>{minutes}:{seconds < 10 ? '0' : ''}</Text>
        <View style={styles.infoContainer}>
          <View style={{alignItems: 'center', justifyContent: 'center', padding: 5}}>
            <Image style={styles.thumbnail} source={{uri: video.thumbnail}}/>
            <Text style={styles.name}>{video.name}</Text>
            <Text style={styles.followers}>{followString}</Text>
          </View>
          <View>
            <View style={styles.iconsContainer}>
              <Pressable style={{alignItems: 'center'}}>
                <AntDesign name="like2" size={18} color="gray" />
                <Text style={styles.count}>{video.likes}</Text>
              </Pressable>
              <Pressable style={{alignItems: 'center'}}>
                <Feather name="download" size={18} color="gray" />
                <Text style={styles.count}>{video.views}</Text>
              </Pressable>
              <Pressable style={{alignItems: 'center'}}>
                <Ionicons name="share-outline" size={18} color="gray" />
                <Text style={styles.count}>{video.shares}</Text>
              </Pressable>
            </View>
            <View style={{padding: 10}}>
              <Text style={styles.description}>{video.title?.slice(0, 30) + "..."}</Text>
              <Text style={styles.description}>{viewsString} plays</Text>
            </View>
          </View>
      </View>
      {streamData?.isProtectedContent && (
        <Text style={styles.error}>The video is unable to load. We are sorry</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      width: '100%',
    },
    poster: {
        width: "100%",
        height: 400,
        resizeMode: "cover",
    },
    infoContainer: {
      flexDirection: 'row',
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
    error: {
      color: '#367f86',
      fontSize: 11,
      fontWeight: 'bold',
      padding: 5,
      textAlign: "center"
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
