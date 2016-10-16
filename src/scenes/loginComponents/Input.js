import React from 'react'
import { TextInput, View, Text, Image } from 'react-native'

const Input = (props) => {
  const { onChangeText, value, autoCorrect, placeholder, secureTextEntry, placeholderTextColor,keyboardType } = props
  const { input_style, container_style } = styles
  return (
    <View style={container_style}>
        <TextInput
          secureTextEntry={secureTextEntry}
          placeholderTextColor={placeholderTextColor}
          placeholder={placeholder}
          autoCorrect={autoCorrect}
          value={value}
          keyboardType={keyboardType}
          //onChangeText={onChangeText}
          style={input_style}
        />
    </View>
  )
}

const styles = {
  container_style: {
    flex:1,
    borderBottomWidth:2,
    borderBottomColor: '#fff'
  },
  input_style: {
    color: '#fff',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 28,
    flex: 1,
    width: 270,

  },


}
export { Input }
