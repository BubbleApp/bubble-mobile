import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import SvgUri from 'react-native-svg-uri';


import {connect} from 'react-redux'

import {Input} from './loginComponents/Input'
import {WelcomeButton} from '../components/common/WelcomeButton';
import {Spinner} from '../components/common/Spinner'

import * as actions from '../actions'



class LoginScreen extends Component {
    state = {email: '', password: '', error: '', loading: false};

    onButtonPress() {
        const {email, password} = this.state;
        this.setState({error: '', loading: true});
        return true
        //do login shit
    }

    onLoginFail() {
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

    renderButton() {
        if (this.state.loading) {
            return <Spinner size="small"/>;
        }
        return (
            <WelcomeButton onPress={this.onButtonPress.bind(this)} title="Login"/>
        );
    }

    renderContentArea() {
        return(
            <View style={styles.container}>
                <View style={styles.text_input}>
                    <SvgUri width="30" height="30" source={require('../images/userIcon.svg')} style={styles.image_style}/>
                    <View style={styles.input_layout}>
                        <Input placeholder='user@gmail.com'
                               keyboardType={'email-address'}
                               placeholderTextColor ='#DBDBDB'
                               autoCorrect={false}
                               //value={this.state.email}
                               //onChangeText={email => this.setState({ email })}
                        />
                    </View>
                </View>
                <View style={styles.text_input}>
                    <SvgUri width="30" height="30" source={require('../images/LockIcon.svg')} style={styles.image_style}/>
                    <View style={styles.input_layout}>
                        <Input placeholder='password'
                               placeholderTextColor ='#DBDBDB'
                               autoCorrect={false}
                               secureTextEntry={true}
                               //value={this.state.email}
                               //onChangeText={password => this.setState({ password })}
                        />
                    </View>
                </View>
                <View>
                    <Text style= {styles.forgot_password}>Forgot Password
                    </Text>
                </View>
                <View>
                    {this.renderButton()}
                    <WelcomeButton onPress={() => this.props.selectWelcomeScreen('login_or_signup')} title="Back"/>
                </View>
            </View>
        )
    }

    render () {
        return (
            <View style={{'flex': 1}}>
                {this.renderContentArea()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop:40,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: 'rgba(0,0,0,0)',
        alignItems: 'center',

    },
    image_style: {
        flex: 1 ,
        flexDirection: 'column',
        marginRight: 60
    },
    text_input: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    input_layout: {
        width:270
    },
    forgot_password: {
        fontSize:12,
        color: '#fff',
        marginBottom: 15

    }



});

const mapStateToProps = (state) => {
    const expanded_tab = state.welcomeScreenCurrent
    return {expanded_tab}
}
export default connect(mapStateToProps, actions)(LoginScreen)



