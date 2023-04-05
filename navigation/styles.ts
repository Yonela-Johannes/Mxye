import { StyleSheet } from "react-native";
import React from 'react';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        marginLeft: 15,
    },
    useName: {
        fontSize: '1.5rem',
        color: '#fff',  
    },
    userName: {
        left: 20,
        color: 'grey',     
    },
    centerContainer: {
            textAlign: "center",
            justifyContent: "center",
            width: 40,
    }
})

export default styles;