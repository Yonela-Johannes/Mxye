import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function VideoCategory({video}) {
  const navigation = useNavigation();

  const onPressHandler = (id) =>{
    navigation.navigate('VideoScreen', {id: id})
  }

  return (
    <TouchableOpacity onPress={() => onPressHandler(video?.video.videoId)} style={styles.container}>
      <Image style={styles.album__image} source={{uri: video?.video.thumbnails[0].url}} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{video?.video.title?.slice(0, 30) + "..."}</Text>
        <Text style={styles.subtitle}>{video?.video.author.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: 'center',
    marginVertical: 8,
    flexDirection: 'row',
    gap: 8,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 0},
    shadowOpacity: .4,
    shadowRadius: 5,
    position: 'relative'
  },
  textContainer: {
    paddingVertical: 5,
    gap: 5,
  },
  title: {
    color: "#008C76FF"
  },
  subtitle: {
    color: 'grey',
  },
  album__image : {
      width: 120,
      height: 100,
      borderRadius: 5,
  },
  headline: {
      color: 'black',
      fontSize: 12,
      paddingTop: 10,
  },
  playContainer: {
    backgroundColor: '#41414188',
    height: "100%",
    position: "absolute",
    width: 70
  },
  playPause: {
    marginVertical: "auto",
    marginHorizontal: "auto",

  }
})
