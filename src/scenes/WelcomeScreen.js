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

class WelcomeScreen extends Component {
    componentWillUpdate(){
        LayoutAnimation.spring()
    }
    renderContentArea() {
        const {expanded_tab} = this.props;
        console.log(expanded_tab)
        if (expanded_tab == 'main') {
            return (
                <InfoWelcomeComponent/>
            )
        } else if (expanded_tab == 'login') {
            return (
                <View>
                    <View>
                        <WelcomeButton onPress={() => this.props.selectWelcomeScreen('main')} title="Back"/>
                    </View>
                </View>
            )
        } else if (expanded_tab == 'signup') {
            console.log('reached')
            return (
                <Image source={require('../images/BackgroundGradient.png')} style={styles.background}>
                    <Image source={require('../images/BubbleLogo.png')} style={styles.logo} />
                        <View>
                            <View>
                                <WelcomeButton onPress={() => this.props.selectWelcomeScreen('login')} title="BananaPhone"/>
                            </View>
                            <View>
                                <WelcomeButton onPress={() => this.props.selectWelcomeScreen('signup')} title="hello hello"/>
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
    },

});

const mapStateToProps = (state) => {
   const expanded_tab = state.welcomeScreenCurrent
    return {expanded_tab}
}
export default connect(mapStateToProps, actions)(WelcomeScreen)
