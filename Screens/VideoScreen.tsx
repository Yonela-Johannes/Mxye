import React,{useState} from 'react'
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import Categories from '../data/Catergories'
import VideoCategory from '../components/VideoCategory/VideoCategory'
import { useGetVideosByCountryQuery } from '../redux/services/shazam'

function VideoScreen() {
  const {data, isFetching, error} = useGetVideosByCountryQuery();
  if (isFetching && !data) return <ActivityIndicator />
  return (
    <View style={styles.container}>
      <FlatList
        data={data?.videos}
        renderItem={({ item }) => (
          <VideoCategory
            video={item}
          />
      )}
      // keyExtractor={(key) => key?.video_id}
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
    },
})
export default VideoScreen
