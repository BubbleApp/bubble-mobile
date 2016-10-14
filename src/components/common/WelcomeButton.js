import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import Button from 'apsl-react-native-button'


const WelcomeButton = (props) => {
    const { buttonStyle, textStyle } = styles;
    const { onPress, title } = props;
    return (
        <Button onPress={onPress} style={buttonStyle}>
                <Text style={textStyle}>{title}</Text>
        </Button>
    )
};

const styles ={
    buttonStyle: {
        width: 150,
        backgroundColor: '#44C1C4',
        borderColor: 'rgba(0,0,0,0)',
        borderRadius: 30,

    },
    textStyle: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 19,
        fontWeight: '600',
    }
};

export { WelcomeButton }
