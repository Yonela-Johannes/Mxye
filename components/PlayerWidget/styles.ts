import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderTopColor: '#3d1f48'
    },
    mid__container: {
        justifyContent: 'space-around',
        marginRight: 40
    },

    image: {
        width: 50,
        height: 50,
        borderRadius: 4
    },

    title: {
        color: '#3d1f48',
        fontSize: 14
    },
    artist: {
        color: "gray",
        fontSize: 10
    },
    progress: {
        height: 4,
        borderRadius: 10,
        marginVertical: 2,
        backgroundColor: 'gray',
    }
})

export default styles;