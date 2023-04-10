import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, Pressable, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function VideoCategory({video}) {
  const navigation = useNavigation();

  const onPressHandler = (id) =>{
    navigation.navigate('VideoScreen', {id: id})
  }

  return (
    <TouchableOpacity onPress={() => onPressHandler(video?.video_id)} style={styles.container}>
      <Image style={styles.album__image} source={{uri: video?.thumbnails[0].url}} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{video?.title?.slice(0, 30) + "..."}</Text>
        <Text style={styles.subtitle}>{video?.author}</Text>
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
      width: 70,
      height: 70,
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
