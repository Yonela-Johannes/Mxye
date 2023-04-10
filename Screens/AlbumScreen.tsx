import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Image, ActivityIndicator} from 'react-native'
import {useRoute} from '@react-navigation/native'
import { useGetSongDetailsQuery } from '../redux/services/shazam'
import PlayerWidget from '../components/PlayerWidget';
function AlbumScreen() {
  const route = useRoute();
  const { params } = route;
  const {id} = params
  const {data, isFetching, error} = useGetSongDetailsQuery(id);

  if(!data || isFetching) return <ActivityIndicator />
  return (
    <View>
      <View style={styles.container}>
        <Image source={{uri: data?.result?.images?.coverart}} style={styles.album__image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{data?.result?.title}</Text>
          <Text style={styles.subtitle}>{data?.result?.title?.slice(0, 30) + "..."}</Text>
          <Text style={styles.subtitle}>{data?.result?.subtitle}</Text>
        </View>
      </View>
      {/* <PlayerWidget data={data} /> */}
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
})
export default AlbumScreen
