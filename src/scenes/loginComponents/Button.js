import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const Button = (props) => {
    const { buttonStyle, textStyle } = styles;
    const { onPress, title } = props;
    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>
                {props.children}
            </Text>
        </TouchableOpacity>
    )
};

const styles ={
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#44C1C4',
        borderRadius: 30,
        marginLeft: 5,
        marginRight: 5,
    },
    textStyle: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 19,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
};

export { Button }
