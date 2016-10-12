import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const WelcomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text
                style={styles.welcome}
                onPress={() => Actions.gray()}
            >
                Scarlet Screen
            </Text>
            <Text
                style={styles.welcome}
            >
                Open Modal
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#bb0000',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
    },
});

export default WelcomeScreen;

