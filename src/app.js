
import React from 'react'
import {View} from 'react-native'

import { Router, Scene } from 'react-native-router-flux';

import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducers from './reducers'

import WelcomeScreen from './scenes/WelcomeScreen'


const App = () => {
    return (
        <Provider store={createStore(reducers)}>
            <Router>
                <Scene
                    key="welcomeScreen"
                    component={WelcomeScreen}
                    hideNavBar
                    //title="Bubble"
                />
            </Router>
        </Provider>
    )
}

export default App;
