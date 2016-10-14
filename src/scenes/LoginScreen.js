import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import {Actions} from 'react-native-router-flux';

import {Input} from './loginComponents/Input'

var UserImage = '../images/UserIcon.png'



const LoginScreen = () => {
    return (
        <Image source={require('../images/BackgroundGradient.png')} style={styles.background}>
            <View style={styles.container}>
                <View style={styles.image_box}>
                    <Image source={require('../images/BubbleLogo.png')} style={styles.logo} />
                </View>
                <Input label='Email:'
                       placeholder='user@gmail.com'
                       autoCorrect={false}
                       imgSrc= {UserImage}
                       //value={this.state.email}
                       /*onChangeText={email => this.setState({ email })}*/>
                </Input>



            </View>
        </Image>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop:65,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0)',
    },
    background: {
        flex:1,
        width: undefined,
        height: undefined,
    },
    logo: {
        height: 320,
        width: 207,
    },
    image_box:{
        flex: 5,
        padding: 50,
        justifyContent: 'space-around'
    },
});

export default LoginScreen;

