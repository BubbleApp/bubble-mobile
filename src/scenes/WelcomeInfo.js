import React, {Component} from 'react';
import {View} from 'react-native'
import InfoWelcomeComponent from '../components/InfoWelcomeComponent'

const WelcomeInfo = () => {
    return (
        <View style={{'flex': 1}}>
            <InfoWelcomeComponent/>
        </View>
    );
};
export default WelcomeInfo
