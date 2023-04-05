import React, { useState } from 'react';
import {View, StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import { useSelector } from 'react-redux'
import { useGetSongsByCountryQuery } from '../redux/services/shazam'
import Error from '../components/Error';
import Album from '../components/MusicPlayer/Album';
import PlayerWidget from '../components/PlayerWidget';

const MusicScreen = () => {
  const {data, isFetching, error} = useGetSongsByCountryQuery();
  const [sound, setSound] = useState<Sound|null>(null)
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  if (isFetching && !data) return <ActivityIndicator />
  if(error) return <Error />
    return (
      <View style={styles.container}>
          <FlatList
            data={data?.albums?.items}
            renderItem={(music) => (
              <Album
                music={music}
                sound={sound}
                setSound={setSound}
              />
            )}
            keyExtractor={(key) => key?.id}
          />
          <PlayerWidget sound={sound} setSound={setSound} />
      </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#e2e2e2',
        justifyContent: 'center',
        alignContent: 'center',
    }
})
export default MusicScreen
