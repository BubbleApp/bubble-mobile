import React, {Component} from 'react';
import {Alert, StyleSheet, View, Text, Image} from 'react-native';
import {connect} from 'react-redux'
import AppIntro from 'react-native-app-intro';
import * as actions from '../actions'

class InfoWelcomeComponent extends Component {
    onSkipBtnHandle = (index) => {
        Alert.alert('Skip');
        console.log(index);
    }
    doneBtnHandle = () => {
        this.props.selectWelcomeScreen('signup')
    }
    nextBtnHandle = (index) => {
        Alert.alert('Next');
        console.log(index);
    }
    onSlideChangeHandle = (index, total) => {
        console.log(index, total);
    }

    render() {
        return (
            <AppIntro
                onNextBtnClick={this.nextBtnHandle}
                onDoneBtnClick={this.doneBtnHandle}
                onSkipBtnClick={this.onSkipBtnHandle}
                onSlideChange={this.onSlideChangeHandle}
            >
                <View style={styles.slide}>
                    <Image style={styles.logo} source={require('../images/BubbleLogo.png')}/>
                </View>
                <View style={[styles.slide, {backgroundColor: '#a4b602'}]}>
                    <View level={-10}><Text style={styles.text}>Page 2</Text></View>
                    <View level={5}><Text style={styles.text}>Page 2</Text></View>
                    <View level={20}><Text style={styles.text}>Page 2</Text></View>
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