import React, { useEffect, useState} from 'react'
import {View, Text, Image, TouchableOpacity, ActivityIndicator} from 'react-native'
import styles from './styles'
import { Ionicons } from '@expo/vector-icons';
import { Sound } from "expo-av/build/Audio/Sound";

const PlayerWidget = ({sound, setSound}) =>  {
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [duration, setDuration] = useState<number|null>(null)
  const [position, setPosition] = useState<number|null>(null)

    const onPlayBackStatusUpdate = (status) => {
    setIsPlaying(status.isPlaying);
    setDuration(status.durationMillis)
    setPosition(status.positionMillis)
  }
  const playCurrentSong = async () => {
    if(sound){
      await sound.unloadAsync();
    }
    const {sound: newSound } = await Sound.createAsync(
      { uri: sound?.uri },
      { shouldPlay: isPlaying },
      onPlayBackStatusUpdate
    )
    setSound(newSound)
  }

  useEffect(() =>{
      playCurrentSong();
  },[])

  const onPlayPausePress = async () => {
    if(!sound){
    return;
    }
    if(isPlaying){
        await sound.stopAsync();
    }else {
        console.log("This is the sound bro:::", sound)
        await sound?.uri.playAsync();
    }
  }

  const getProgress = () =>{
    if(sound === null || position === null || duration === null){
        return 0;
    }
    return(position / duration ) * 100;
  }

  return (
    <View>
      <View style={styles.container}>
          <View style={{flex: 1}}>
              <Image source={{uri: sound?.images[0]?.url}} style={styles.image} />
          </View>
          <View style={styles.mid__container}>
              <Text style={styles.title}>{sound?.name}</Text>
              <Text style={styles.artist}>{sound?.artists[0].name}</Text>
          </View>
          <View style={{flexDirection: 'row', marginRight: 5, alignItems: 'center'}}>
            <TouchableOpacity onPress={onPlayPausePress}>
                <Ionicons style={{marginHorizontal: 10}} name={isPlaying ? 'pause-outline' : 'play-outline'} size={20} color="#3d1f48" />
            </TouchableOpacity>
          </View>
      </View>
      <View style={{width: '95%', alignItems: 'center'}}>
          <View style={[styles.progress,{width: `${getProgress()}%`}]} />
      </View>
    </View>
  )
}

export default PlayerWidget
