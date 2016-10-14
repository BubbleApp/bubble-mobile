import React from 'react'
import { TextInput, View, Text, Image } from 'react-native'

const Input = (props) => {
  const { imgSrc, onChangeText, value, autoCorrect, placeholder, secureTextEntry } = props
  const { inputStyle, imageStyle, containerStyle, imageBox } = styles
  return (
    <View style={containerStyle}>
      <View style={imageBox}>
        <Image source={{uri: imgSrc}} style={imageStyle} />
      </View>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={autoCorrect}
        value={value}
        //onChangeText={onChangeText}
        style={inputStyle}
      />
    </View>
  )
}

const styles = {
  inputStyle: {
    color: 'rgba(0,0,0,0)',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    borderBottom: 5,
    borderColor: '#fffff',
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  imageBox: {
    flex: 1,
    paddingLeft: 20,
    justifyContent: 'space-around',
    height: 50,
    width: 50

  }
}
export { Input }
