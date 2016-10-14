import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import Button from 'apsl-react-native-button'


const WelcomeButton = (props) => {
    const { buttonStyle, textStyle } = styles;
    const { onPress, title } = props;
    return (
        <Button onPress={onPress} style={buttonStyle}>
            <View>
                <Text style={textStyle}>{title}</Text>
            </View>
        </Button>
    )
};

const styles ={
    buttonStyle: {
        // flex: 1,
        // alignSelf: 'stretch',
        // backgroundColor: '#44C1C4',
        // borderRadius: 30,
        // marginLeft: 5,
        // marginRight: 5,
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

export { WelcomeButton }
