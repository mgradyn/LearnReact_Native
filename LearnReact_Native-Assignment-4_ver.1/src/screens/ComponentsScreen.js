import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = function() {
    const greeting = "My name is Grady";

    return (
    <View>
        <Text style={styles.textStyle}>Getting started with React Native</Text>
        <Text style={styles.textStyle2}>{greeting}</Text>
    </View> 
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 40
    },
    textStyle2: {
        fontSize: 20
    }
});

export default ComponentsScreen;