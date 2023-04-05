import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Image, ActivityIndicator} from 'react-native'
import {useRoute} from '@react-navigation/native'
import Lyrix from '../components/lyrix/Lyrix';

function AlbumScreen() {
  const route = useRoute();
  const { params } = route;

  return (
    <View>
      <View style={styles.container}>
        <Image source={{uri: params?.data?.images[0]?.url}} style={styles.album__image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{params?.data?.name}</Text>
          <Text style={styles.subtitle}>{params?.data?.artists[0]?.name}</Text>
        </View>
      </View>
      {/* <Lyrix data={params?.data}/> */}
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
