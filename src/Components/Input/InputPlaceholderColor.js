import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'

const InputPlaceholderColor = () => {
  return (
    <View style={styles.contain}>
      <TextInput style={styles.basicTextInput2} placeholder={'Colored Placeholder'} placeholderTextColor={'#fff'}/>
    </View>
  )
}

export default InputPlaceholderColor

const styles = StyleSheet.create({
    contain: {
        width: '100%',
        paddingTop: 15,
        display: 'flex',
        flexDirection: 'column',
        paddingHorizontal: 20,
        paddingBottom: 15,
    },

    basicTextInput2: {
        backgroundColor: '#444',
        color: '#fff',
        borderRadius: 6,
        marginTop: 6,
        height: 48,
        paddingHorizontal: 10,
    }
})