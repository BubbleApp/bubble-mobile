import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    LayoutAnimation
} from 'react-native';
import {connect} from 'react-redux'
import { WelcomeButton } from '../components/common/WelcomeButton';
import * as actions from '../actions'

class WelcomeScreen extends Component {
    componentWillUpdate(){
        LayoutAnimation.spring()
    }
    renderContentArea() {
        const {expanded_tab} = this.props;
        if (expanded_tab == 'main') {
            return (
                <View>
                    <View style={styles.button_box1}>
                        <WelcomeButton onPress={() => this.props.selectWelcomeScreen('login')} title="Login"/>
                    </View>
                    <View style={styles.button_box2}>
                        <WelcomeButton onPress={() => this.props.selectWelcomeScreen('signup')} title="Signup"/>
                    </View>
                </View>
            )
        } else if (expanded_tab == 'login') {
            return (
                <View>
                    <View style={styles.button_box2}>
                        <WelcomeButton onPress={() => this.props.selectWelcomeScreen('main')} title="Back"/>
                    </View>
                </View>
            )
        } else if (expanded_tab == 'signuo'){
            return (
                <View>
                    <View style={styles.button_box1}>
                        <WelcomeButton onPress={() => this.props.selectWelcomeScreen('login')} title="BananaPhone"/>
                    </View>
                    <View style={styles.button_box2}>
                        <WelcomeButton onPress={() => this.props.selectWelcomeScreen('signup')} title="hello hello"/>
                    </View>
                </View>
            )
        }
    }
    render() {
        return (
            <Image source={require('../images/BackgroundGradient.png')} style={styles.background}>
                <View style={styles.container}>
                    <View style={styles.image_box}>
                        <Image source={require('../images/BubbleLogo.png')} style={styles.logo} />
                    </View>
                    <View>
                        {this.renderContentArea()}
                    </View>
                </View>
            </Image>

        );
    }
}

const styles = StyleSheet.create({
    container: {
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
        flex: 6,
        padding: 50,
        justifyContent: 'space-around'
    },
    button_box1:{
        flex: 1,
        width: 250,
        marginBottom: 5,
        marginTop:100,
        justifyContent: 'space-around',
        alignItems: 'center'

    },
    button_box2:{
        flex: 1,
        width: 250,
        marginBottom: 100,
        marginTop:5,
        justifyContent: 'space-around',
        alignItems: 'center'

    },
    text: {
        fontSize: 20,
        color: '#ffffff',
    }

});

const mapStateToProps = (state) => {
   const expanded_tab = state.welcomeScreenCurrent
    return {expanded_tab}
}
export default connect(mapStateToProps, actions)(WelcomeScreen)

