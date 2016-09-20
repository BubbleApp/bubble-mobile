'use strict';

import { AppRegistry, StatusBar } from 'react-native'
import setup from './App/setup'

StatusBar.setBarStyle('light-content');
AppRegistry.registerComponent('Bubble', setup);
