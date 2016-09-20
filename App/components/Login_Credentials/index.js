'use strict';

import React, { Component } from 'react';
import { DeviceEventEmitter, Dimensions, Image } from 'react-native';
import { connect } from 'react-redux';

import { replaceRoute } from '../../actions/route';
import { setUser } from '../../actions/user';

import { Container, Content, Text, List, ListItem, InputGroup, Input, Button, Icon, View } from 'native-base';

import myTheme from '../../themes/base-theme';
import styles from './styles';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visibleHeight: Dimensions.get('window').height,
            scroll: false,
            name: ''
        };
    }

    replaceRoute(route) {
        this.setUser(this.state.name);
        this.props.replaceRoute(route);
    }

    setUser(name) {
        this.props.setUser(name);
    }
    
    render() {
        return (
            <Container>
                <View style={styles.container}>
                    <Content>
                        <List>
                            <ListItem>
                                <InputGroup>
                                    <Input placeholder='EMAIL' />
                                </InputGroup>
                            </ListItem>

                            <ListItem>
                                <InputGroup>
                                    <Input placeholder='PASSWORD' secureTextEntry={true}/>
                                </InputGroup>
                            </ListItem>
                        </List>
                    </Content>
                </View>
            </Container>
                
        )
    }
}
    
function bindActions(dispatch){
    return {
        replaceRoute:(route)=>dispatch(replaceRoute(route)),
        setUser:(name)=>dispatch(setUser(name))
    }
}


export default connect(null, bindActions)(Login);
     
