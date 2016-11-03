import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    LayoutAnimation
} from 'react-native';
import axios from 'axios'

import { FormLabel, FormInput } from 'react-native-elements'
import {connect} from 'react-redux'
import {Button} from 'react-native-elements'
import Spinner from 'react-native-loading-spinner-overlay';
import * as actions from '../actions'


class WelcomeOptions extends Component {

    state = {username: '', password: '', error: '', loading: false};

    onSignUpButtonPress() {
        const {email, password} = this.state;
        this.setState({error: '', loading: true});
    }

    renderSignupButton() {
        return (
            <Button
                small
                title='Signup'
                backgroundColor="#5E35B1"
                buttonStyle={{height: 45}}
                textStyle={{fontSize: 18, fontFamily:'Avenir-Heavy'}}
                onPress={this.onSignUpButtonPress.bind(this)}/>
        );
    }

    onLoginButtonPress() {
        const {email, password} = this.state;
        this.setState({error: '', loading: true});
        //DO AUTH STUFF
        console.log('worked');
        axios.post('https://justinpezzack.ngrok.io/login', {
            'username': this.state.username,
            'password': this.state.password
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    onLoginFail() {
        //do logic to determine what kind of error and then return the proper error
        this.setState({error: 'Authentication Failed', loading: false});
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: ''
        });
    }
    renderSpinner() {
            if (this.state.loading)
                return <Spinner visible={true}/>
    }
    renderLoginButton() {
        return (
                <Button
                small
                title='Login'
                backgroundColor="#fff"
                buttonStyle={{height: 45, borderWidth:2, borderColor:'#7D69AE', backgroundColor: 'rgba(0,0,0,0)', marginTop: 10}}
                textStyle={{fontSize: 18, color: '#5E35B1', fontFamily:'Avenir-Heavy'}}
                onPress={this.onLoginButtonPress.bind(this)}/>
        );
    }

    componentWillUpdate() {
        LayoutAnimation.easeInEaseOut()
    }
    onSignupPress () {
        this.props.selectWelcomeOption('signup')
    }
    onLoginPress () {
        this.props.selectWelcomeOption('login')
    }
    renderHeaderArea() {
        const {expanded_view} = this.props;
        if (expanded_view == 'main') {
            return (
                <View style={styles.header}>
                    <View style={{alignItems: 'center'}}>
                        <Image source={require('../images/BubbleLogo.png')} style={styles.logo}/>
                        {this.renderSpinner()}
                    </View>
                </View>
            )
        }
    }


    renderContentArea() {
        const {expanded_view} = this.props;
        if (expanded_view == 'main') {
            return (
                    <View>
                        <View>
                            <Button
                                small
                                title='Signup'
                                backgroundColor="#5E35B1"
                                buttonStyle={{height: 45}}
                                textStyle={{fontSize: 18, fontFamily:'Avenir-Heavy'}}
                                onPress={this.onSignupPress.bind(this)}/>
                        </View>
                        <View>
                            <Button
                                small
                                title='Login'
                                backgroundColor="rgba(0,0,0,0)"
                                buttonStyle={{height: 45, borderWidth:2, borderColor:'#5E35B1', marginTop: 10}}
                                textStyle={{fontSize: 18, color: '#5E35B1', fontFamily:'Avenir-Heavy'}}
                                onPress={this.onLoginPress.bind(this)}/>
                        </View>
                    </View>
            )
        } else if (expanded_view == 'login') {
            return (
                <View>
                    <View style={{marginTop: 50}}>
                        <FormLabel labelStyle={styles.labelStyle}>Username</FormLabel>
                        <FormInput inputStyle={styles.labelStyle} onChangeText={(data) => console.log(data)}/>
                        <FormLabel labelStyle={styles.labelStyle}>Password</FormLabel>
                        <FormInput inputStyle={styles.labelStyle} onChangeText={() => []}/>
                    </View>
                    <View style={{marginTop: 20}}>
                        {this.renderLoginButton()}
                    </View>
                </View>
            )
        } else if (expanded_view == 'signup') {
            return (
                <View>
                    <View style={{marginTop: 15}}>
                        <FormLabel labelStyle={styles.labelStyle}>Name</FormLabel>
                        <FormInput inputStyle={styles.labelStyle} onChangeText={(data) => console.log(data)}/>
                        <FormLabel labelStyle={styles.labelStyle}>Username</FormLabel>
                        <FormInput inputStyle={styles.labelStyle} onChangeText={() => []}/>
                        <FormLabel labelStyle={styles.labelStyle}>Phone #</FormLabel>
                        <FormInput inputStyle={styles.labelStyle} onChangeText={() => []}/>
                        <FormLabel labelStyle={styles.labelStyle}>Email</FormLabel>
                        <FormInput inputStyle={styles.labelStyle} onChangeText={() => []}/>
                        <FormLabel labelStyle={styles.labelStyle}>Password</FormLabel>
                        <FormInput inputStyle={styles.labelStyle} onChangeText={() => []}/>
                    </View>
                    <View style={{marginTop: 20}}>
                        {this.renderSignupButton()}
                    </View>
                </View>
            )
        }

    }
    render() {
        page_style = {
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
        };
        if (this.props.expanded_view == 'signup' || this.props.expanded_view == 'login') {
            page_style['justifyContent'] = 'flex-start'
        }
        return (
            <View style={page_style}>
                <Image source={require('../images/BackgroundGradient.png')} style={styles.background}>
                    <View style={styles.slideUp}>
                            {this.renderHeaderArea()}
                        <View>
                            {this.renderContentArea()}
                        </View>
                    </View>
                    <View style={styles.textBox}>
                        <Text style={styles.text}>Made in Waterloo</Text>
                    </View>
                </Image>
            </View>
        )
    }
}

const styles = {
    background: {
        flex:1,
        width: undefined,
        height: undefined,
        backgroundColor: 'rgba(0,0,0,0)',
    },
    header: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 40,
        marginTop: 50
    },
    logo: {
        height: 320,
        width: 207,
    },
    textBox: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 2
    },
    text: {
        textAlign: 'center',
        fontFamily:'Avenir-Heavy',
        color: '#fff',
    },
    slideUp : {
        marginBottom: 50
    },
    labelStyle: {
        color: '#fff',
        borderBottomColor: '#fff'
    }
};

const mapStateToProps = (state) => {
    const expanded_view = state.welcomeScreenCurrent
    return {expanded_view}
};
export default connect(mapStateToProps, actions)(WelcomeOptions)



