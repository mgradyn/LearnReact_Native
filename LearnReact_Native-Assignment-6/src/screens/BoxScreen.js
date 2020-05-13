import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <View style={styles.viewOneStyle} />
            <View style={styles.viewTwoStyle} />
            <View style={styles.viewThreeStyle} />
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        flexDirection: 'row',
        justifyContent: 'space-between',
        

    },
    viewOneStyle: {
        height: 100, 
        width: 100, 
        backgroundColor: 'red',

    },
    viewTwoStyle: {
        height: 100, 
        width: 100, 
        backgroundColor: 'green',
        alignSelf: 'flex-end'
    },
    viewThreeStyle: {
        height: 100, 
        width: 100, 
        backgroundColor: 'blue', 


    }
});

export default BoxScreen;