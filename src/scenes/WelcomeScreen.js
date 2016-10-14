import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import { Button } from '.././components/common/Button';
import {Actions} from 'react-native-router-flux';



class WelcomeScreen extends Component {
    state = { current_view: 'intro' }
    render() {
        return (
            <Image source={require('../images/BackgroundGradient.png')} style={styles.background}>
                <View style={styles.container}>


                    <View style={styles.image_box}>
                        <Image source={require('../images/BubbleLogo.png')} style={styles.logo} />
                    </View>
                    <View style={styles.button_box1}>
                        <Button onPress={() => Actions.loginScreen()}>Login</Button>
                    </View>
                    <View style={styles.button_box2}>
                        <Button>Signup</Button>
                    </View>
                        {/*<Text*/}
                            {/*style={styles.text}*/}
                            {/*onPress={() => Actions.loginScreen()}*/}
                        {/*>*/}
                            {/*Login*/}
                        {/*</Text>*/}

                        {/*<Text*/}
                            {/*style={styles.text}*/}
                        {/*>*/}
                            {/*Signup*/}
                        {/*</Text>*/}


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
        flex: 5,
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

export default WelcomeScreen;

