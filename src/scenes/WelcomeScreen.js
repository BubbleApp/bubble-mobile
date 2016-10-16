import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  LayoutAnimation,
  MapView,
  Modal,
} from 'react-native'
import {connect} from 'react-redux'
import {WelcomeButton} from '../components/common/WelcomeButton';
import InfoWelcomeComponent from '../components/InfoWelcomeComponent'
import * as actions from '../actions'

import LoginScreen from './LoginScreen'

class WelcomeScreen extends Component {
    componentWillUpdate(){
        LayoutAnimation.spring()
    }
    renderContentArea() {
        const {expanded_view} = this.props;
        if (expanded_view == 'main') {
            return (
                <InfoWelcomeComponent/>
            )
        } else if (expanded_view == 'login_or_signup') {
            return (
                <Image source={require('../images/BackgroundGradient.png')} style={styles.background}>
                    <Image source={require('../images/BubbleLogo.png')} style={styles.logo} />
                    <View>
                        <View>
                            <WelcomeButton onPress={() => this.props.selectWelcomeScreen('login')} title="Login"/>
                        </View>
                        <View>
                            <WelcomeButton onPress={() => this.props.selectWelcomeScreen('signup')} title="Sign Up"/>
                        </View>
                    </View>
                </Image>
            )
        } else if (expanded_view == 'login') {
            return (
                <Image source={require('../images/BackgroundGradient.png')} style={styles.background}>
                    <Image source={require('../images/BubbleLogo.png')} style={styles.logo} />
                    <View>
                        <LoginScreen/>
                    </View>

                </Image>


            )
        } else if (expanded_view == 'signup') {
            return (
                <Image source={require('../images/BackgroundGradient.png')} style={styles.background}>
                    <Image source={require('../images/BubbleLogo.png')} style={styles.logo} />
                        <View>
                            <View>
                                <WelcomeButton onPress={() => this.props.selectWelcomeScreen('login')} title="Login"/>
                            </View>
                            <View>
                                <WelcomeButton onPress={() => this.props.selectWelcomeScreen('signup')} title="Sign Up"/>
                            </View>
                        </View>
                </Image>
            )
        }
    }
    render() {
        return (
            <View style={{'flex': 1}}>
                {this.renderContentArea()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        flex:1,
        width: undefined,
        height: undefined,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0)',
    },
    logo: {
        height: 320,
        width: 207,
        marginTop: 20
    },

});

const mapStateToProps = (state) => {
   const expanded_view = state.welcomeScreenCurrent
    return {expanded_view}
}
export default connect(mapStateToProps, actions)(WelcomeScreen)
