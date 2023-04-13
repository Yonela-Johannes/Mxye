import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Image, ActivityIndicator, FlatList} from 'react-native'
import {useRoute} from '@react-navigation/native'
import { useGetSongDetailsQuery, useGetSongLyricsQuery } from '../redux/services/shazam'
import PlayerWidget from '../components/PlayerWidget';
function AlbumScreen() {
  const route = useRoute();
  const { params } = route;
  const {id} = params
  const {data, isFetching, error} = useGetSongDetailsQuery(id);
  const {data: lyrics, isFetching: fetchLyrics} = useGetSongLyricsQuery(id);
  if(!data || isFetching) return <ActivityIndicator />
  return (
    <View>
      <View style={styles.container}>
        <Image source={{uri: data?.tracks[0]?.album.images[0].url}} style={styles.album__image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{data?.tracks[0]?.title}</Text>
          <Text style={styles.subtitle}>{data?.tracks[0]?.name?.slice(0, 30) + "..."}</Text>
          <Text style={styles.subtitle}>{data?.tracks[0]?.artists[0].name}</Text>
        </View>
          <PlayerWidget data={data} />
      </View>
        <View style={styles.lyrics}>
          <FlatList
              data={lyrics?.lyrics?.lines}
              renderItem={(word) => (<Text style={styles.lyric}>{word?.item.words}</Text>)}
              keyExtractor={(_, i) => String(i)}
          />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignSelf: 'center',
    marginVertical: 8,
    gap: 8,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 0},
    shadowOpacity: .4,
    shadowRadius: 5,
    justifyContent: 'center',
  },
  textContainer: {
    paddingVertical: 5,
    gap: 5,
    paddingHorizontal: 10,
  },
  title: {
    color: "#008C76FF"
  },
  subtitle: {
    color: 'grey',
  },
  album__image : {
      width: "100%",
      height: 200,
      borderRadius: 5,
  },
  headline: {
      color: 'black',
      fontSize: 12,
      paddingTop: 10,
  },
  lyrics: {
    padding: 20,
  },
  lyric: {
    marginVertical: 2,
    color: "grey",
  }
})
export default AlbumScreen
