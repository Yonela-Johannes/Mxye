import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center'
    },
    mid__container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '90%',
        padding: 5,
        borderRadius: 2,
        backgroundColor: '#d1d1d1',
        marginVertical: 5
    },
    header: {
        color: '#3d1f48',
        fontSize: 22,
        fontWeight: 'bold'
    },
    handlers: {
        color: "gray",
        fontSize: 10,
        padding: 5
    },

    image__container: {
        width: 300,
        height: 200,
        borderRadius: 4
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 4
    },
    creator__container: {
        width: '80%',
        alignItems: 'flex-end'
    },
    app: {
        fontWeight: 'bold',
        color: '#41748d',
    },
    button: {
        backgroundColor: '#41748d',
        paddingHorizontal: 20,
        paddingVertical: 2,
        borderRadius: 20
    },
    button__text: {
        fontSize: 22,
        color: '#3d1f48'
    }
});

export default styles