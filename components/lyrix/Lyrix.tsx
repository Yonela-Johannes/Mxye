import React from 'react'
import { useSelector } from 'react-redux'
import { View, Text, StyleSheet, ActivityIndicator} from 'react-native'
import { useGetSongLyricsQuery } from '../../redux/services/shazam'

const Lyrix = () => {
  const {data, isFetching, error} = useGetSongLyricsQuery();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  if (isFetching && !data) return <ActivityIndicator />

  
  return (
    <View style={styles.lyricContainer}>
    <Text style={styles.lyricHeader}>Lyrics:</Text>
    <View style={styles.lyricWrapper}>
      {params?.result?.sections[1].type === 'LYRICS'
        ? params?.result?.sections[1].text.map((line, i) => (
            <p key={i} style={styles.lyric} >{line}</p>
        )) :
        (<Text style={styles.lyric} >Sorry , no lyrics found!</Text>)
      }
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
  lyricContainer: {
    marginBottom: 10,
    paddingHorizontal: 5,
  },
  lyricHeader: {
    marginTop: 10,
    text: 14,
  },
  lyricWrapper: {
    marginTop: 5,
  },
  lyric : {

  }
})

export default Lyrix
