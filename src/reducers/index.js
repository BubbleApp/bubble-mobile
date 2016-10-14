import {combineReducers} from 'redux'
import DefaultReducer from './DefaultReducer'
import WelcomeScreenReducer from './WelcomeScreenReducer'

export default combineReducers({
    default: DefaultReducer,
    welcomeScreenCurrent: WelcomeScreenReducer
})
