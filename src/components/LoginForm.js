import React, {Component} from 'react';
import {Text} from 'react-native';
import Button from 'apsl-react-native-button'
import {Card, CardSection, Input, Spinner} from './common';

class LoginForm extends Component {
    state = {email: '', password: '', error: '', loading: false};

    onButtonPress() {
        const {email, password} = this.state;
        this.setState({error: '', loading: true});
        return true
        //do login shit
    }

    onLoginFail() {
        this.setState({error: 'Authentication Failed', loading: false});
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: ''
        });
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size="small"/>;
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Log in
            </Button>
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label='Email:'
                        placeholder='user@gmail.com'
                        autoCorrect={false}
                        value={this.state.email}
                        onChangeText={email => this.setState({email})}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label='Password:'
                        placeholder='password'
                        secureTextEntry={true}
                        autoCorrect={false}
                        value={this.state.password}
                        onChangeText={password => this.setState({password})}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        )
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}
export default LoginForm;
