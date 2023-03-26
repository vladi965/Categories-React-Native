import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'

const InputMultiple = () => {
  return (
    <View style={styles.contain}>
      <TextInput style={styles.inputMultiple} multiline={true} placeholder={'Your feedback here'}/>
    </View>
  )
}

export default InputMultiple

const styles = StyleSheet.create({
    contain: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
    },

    inputMultiple: {
        width: '100%',
        height: 100,
        paddingVertical: 10,
        textAlignVertical: 'top',
        padding: 10,
        borderWidth: 1,
        borderRadius: 6,
        borderColor: '#3F826D',
    }
})