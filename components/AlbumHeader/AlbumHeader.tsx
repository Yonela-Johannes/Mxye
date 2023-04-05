import React, { useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import albumDetails from '../../data/AlbumDetails'
import { AlbumList } from '../../types'
import styles from './styles'
import { Ionicons, Feather, AntDesign } from '@expo/vector-icons';


export type AlbumHeaderProps = {
    album :  AlbumList
}

function AlbumHeader(props: AlbumHeaderProps ) {
    const {album} = props
    return (
        <View style={styles.container}>
            <View style={styles.image__container}>
                <Image style={styles.image} source={{uri: album.imageUri }} />
            </View>
            <Text style={styles.header}>{album.name}</Text>
            <View style={styles.mid__container}>
                <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center'}}>
                    <AntDesign name="like2" size={18} color="black" />
                    <Text style={styles.handlers}>{album.numberOfLikes}</Text>                
                </TouchableOpacity>
                <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Feather name="play" size={18} color="black" />
                    <Text style={styles.handlers}>{album.numberOfPlays}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Ionicons name="download-outline" size={20} color="black" />
                    <Text style={styles.handlers}>{album.numberOfDownloads}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Ionicons name="share-outline" size={20} color="black" />
                    <Text style={styles.handlers}>{album.numberOfShares}</Text>
                </TouchableOpacity>
            </View>
                <View style={styles.creator__container}>
                    <Text style={styles.app}>{album.by}</Text>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.button__text}>Play</Text>
                </TouchableOpacity>
        </View>
    )
}

export default AlbumHeader
