import React, { useEffect, useState} from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'
import styles from './styles'
import { Ionicons, AntDesign } from '@expo/vector-icons';
import {Sound} from "expo-av/build/Audio/Sound";
import { Audio} from 'expo-av'

// const song ={
//     id: '1',
//     uri: 'https://p.scdn.co/mp3-preview/1d53b96abb564f9ba08427c3c5361dd8fbe72f7d?cid=d8a5ed958d274c2e8ee717e6a4b0971d',
//     imageUri: 'https://images.genius.com/fafcc0242f48734290ed600204a13b9b.1000x1000x1.png',
//     title: 'Wap',
//     artist: 'Cardi B'
// }


const PlayerWidget = ({data}) =>  {
  const [sound, setSound] = useState<Sound|null>(null)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [duration, setDuration] = useState<number|null>(null)
  const [position, setPosition] = useState<number|null>(null)

  console.log(data?.result)

  // const [song, setSong] = useState({})

  // setSong({
  //   id: "",
  //   title: "",
  //   artist: "",
  //   uri: "",
  //   imageUri: "",
  // })
  return ''
  const onPlayBackStatusUpdate = (status) =>{
    setIsPlaying(status.isPlaying);
    setDuration(status.durationMillis)
    setPosition(status.positionMillis)
  }
  const playCurrentSong = async () => {
    if(sound){
      await sound.unloadAsync();
    }
    const {sound: newSound } = await Sound.createAsync(
      { uri: song.uri },
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
      await sound.playAsync();
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
          <Image source={{uri: song.imageUri}} style={styles.image} />
        </View>
        <View style={styles.mid__container}>
          <Text style={styles.title}>{song.title}</Text>
          <Text style={styles.artist}>{song.artist}</Text>
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
