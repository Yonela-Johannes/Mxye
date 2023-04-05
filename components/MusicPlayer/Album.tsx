import React from 'react'
import {Image, StyleSheet, View, TouchableOpacity, Text, ActivityIndicator} from 'react-native'
import { AlbumSingle } from '../../types'
import { useNavigation } from '@react-navigation/native'
import { FontAwesome } from '@expo/vector-icons';


const Album = ({music, sound, setSound}) => {
  const navigation = useNavigation();

  const onPressHandler = (item) => {
    navigation.navigate('AlbumScreen', {id: item?.id, data: item})
  }

  const onPlayHandler = (item) => {
    setSound(item)
  }
  return (
  <View>
      <View style={styles.container}>
          <Image style={styles.album__image} source={{uri: music?.item?.images[0]?.url}} />
          <TouchableOpacity style={styles.textContainer} onPress={() => onPressHandler(music?.item)}>
            <Text style={styles.title}>{music?.item?.name?.slice(0, 30) + "..."}</Text>
            <Text style={styles.subtitle}>{music?.item?.artists[0]?.name}</Text>
          </TouchableOpacity>
          <View style={styles.playContainer}>
            <TouchableOpacity onPress={() => onPlayHandler(music?.item)} style={styles.playPause}>
              <FontAwesome name="play" size={24} color="black" />
            </TouchableOpacity>
          </View>
      </View>
  </View>
  )
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
export default Album
