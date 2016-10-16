
import React, {Component} from 'react'
import {View} from 'react-native'

import { Router, Scene } from 'react-native-router-flux';


import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducers from './reducers'

import WelcomeInfo from './scenes/WelcomeInfo'
import WelcomeOptions from './scenes/WelcomeOptions'


class App extends Component {
    state = { loggedIn : null };
    //TODO: think about how to implement this, probably need to add to login/signup from, also need to change logic in LoginScreen.js
    componentWillMount() {
        return true
        //run login code
    }
    render () {
        return (
            <Provider store={createStore(reducers)}>
                <Router>
                    <Scene
                        key="welcomeInfo"
                        component={WelcomeInfo}
                        title="Bubble"
                        hideNavBar
                    />
                    <Scene
                        key="welcomeOptions"
                        component={WelcomeOptions}
                        hideNavBar
                    />
                </Router>
            </Provider>
        )
    }
}

export default App;
