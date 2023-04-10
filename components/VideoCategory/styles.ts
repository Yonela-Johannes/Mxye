import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    display: {
        width: 100,
        height: 110,
        resizeMode: 'cover',
        borderRadius: 5,
        margin: 5,
        padding: 5
    },
    userImage: {
        position: 'absolute',
        right: 1,
        top: 1,
        width: 40,
        height: 40,
        borderRadius: 50
    },
    videoContainer: {
        padding: 1,
    },
    title: {
        color: '#367f86',
        paddingBottom: 5,
    },
    subtitle: {
      fontSize: 12,
    }

})

export default styles;
