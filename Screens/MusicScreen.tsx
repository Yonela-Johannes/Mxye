import React, { useState } from 'react';
import {View, StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import { useSelector } from 'react-redux'
import { useGetSongsByCountryQuery } from '../redux/services/shazam'
import Error from '../components/Error';
import Album from '../components/MusicPlayer/Album';
import PlayerWidget from '../components/PlayerWidget';

const MusicScreen = () => {
  const {data, isFetching, error} = useGetSongsByCountryQuery();
  if (isFetching && !data) return <ActivityIndicator />
  if(error) return <Error />
    return (
      <View style={styles.container}>
          <FlatList
            data={data?.result.tracks}
            renderItem={(music) => (
              <Album
                music={music}
              />
            )}
            keyExtractor={(key) => key?.key}
          />
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
