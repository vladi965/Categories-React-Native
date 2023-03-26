import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'

const InputPlaceholder = () => {
  return (
    <View style={styles.contain}>
      <TextInput style={styles.basicTextInput} placeholder={'Email'} placeholderTextColor={'#fff'} textContentType='emailAddress' keyboardType='email-address' />
    </View>
  )
}

export default InputPlaceholder

const styles = StyleSheet.create({
    contain: {
        width: '100%',
        paddingTop: 15,
        display: 'flex',
        flexDirection: 'column',
        paddingHorizontal: 20,
        paddingBottom: 15,
    },

    basicTextInput: {
        width: '100%',
        height: 44,
        backgroundColor: '#3F826D',
        borderRadius: 6,
        color: 'white',
        paddingHorizontal: 20
    }
})