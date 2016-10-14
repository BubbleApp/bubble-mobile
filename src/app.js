
import React, {Component} from 'react'
import {View} from 'react-native'

import { Router, Scene } from 'react-native-router-flux';


import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducers from './reducers'

import WelcomeScreen from './scenes/WelcomeScreen'
import LoginScreen from './scenes/LoginScreen'


class App extends Component {
    state = { loggedIn : null };
    //TODO: think about how to implement this, probably need to add to login/signup from, also need to change logic in LoginScreen.js
    componentWillMount() {
        return true
        //run login code
    }
    render(){
        return (
            <Provider store={createStore(reducers)}>
                <Router>
                    <Scene
                        key="welcomeScreen"
                        component={WelcomeScreen}
                        title="Bubble"
                        hideNavBar
                    />
                    <Scene
                        key="loginScreen"
                        component={LoginScreen}
                        hideNavBar
                    />
                </Router>
            </Provider>
        )
    }
}

export default App;
