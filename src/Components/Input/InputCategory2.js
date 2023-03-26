import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
//Esto es TextInput (with Label)
const InputCategory2 = () => {
  return (
    /* Horizontal Label */
    <View style={styles.contain}>
      <Text style={styles.text}>Email</Text>
      <TextInput style={styles.textInput2} autoCorrect={true} autoCapitalize='none' autoCompleteType='email' textContentType='emailAddress'/>
    </View>
  )
}

export default InputCategory2

const styles = StyleSheet.create({
    contain: {
        width: '100%',
        paddingTop: 15,
        display: 'flex',
        flexDirection: 'column',
        paddingHorizontal: 20,
        paddingBottom: 15,
    },
    text: {
        fontSize: 18,
        fontWeight: '400'
    },
    textInput2: {
        width: '100%',
        height: 48,
        backgroundColor: '#3F826D',
        borderRadius: 6,
        marginTop: 6,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#3F826D'
    }
})