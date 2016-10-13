import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import {Actions} from 'react-native-router-flux';

import LoginForm from '../components/LoginForm'

const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <LoginForm/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:65,
        backgroundColor: '#26C6DA',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
    },
});

export default LoginScreen;

