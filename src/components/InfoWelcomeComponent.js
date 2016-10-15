import React, {Component} from 'react';
import {Alert, StyleSheet, View, Text, Image} from 'react-native';
import {connect} from 'react-redux'
import AppIntro from 'react-native-app-intro';
import * as actions from '../actions'

class InfoWelcomeComponent extends Component {
    exitAppIntroFlow = () => {
        this.props.selectWelcomeScreen('signup')
    }
    render() {
        return (
            <AppIntro
                onDoneBtnClick={this.exitAppIntroFlow}
                onSkipBtnClick={this.exitAppIntroFlow}
                showDoneButton={false}>
                <View style={styles.slide}>
                    <Image style={styles.logo} source={require('../images/BubbleLogo.png')}/>
                </View>
                <View style={styles.slide}>
                    <View level={-10}><Text style={styles.text}>The new form of social media</Text></View>
                </View>
                <View style={styles.slide} >
                    <View level={-10}>
                        <Text
                            style={styles.text}
                            onPress={() => this.props.selectWelcomeScreen('signup')}>
                            Get started
                        </Text>
                    </View>
                </View>
            </AppIntro>
        );
    }
}
const styles = StyleSheet.create({
    slide: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#85ccb0',
        padding: 15,
    },
    text: {
        color: '#fff',
        textAlign:'center',
        fontSize: 30,
        fontWeight: 'bold',
    },
    logo: {
        marginBottom: 100,
        height: 320,
        width: 207,
    }

});
const mapStateToProps = (state) => {
    return state
};
export default connect(mapStateToProps, actions)(InfoWelcomeComponent)