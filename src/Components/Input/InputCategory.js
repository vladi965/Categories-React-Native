import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'


const InputCategory = () => {
  return (
    /* Horizontal Label */
    <View style={styles.contain}>
      <Text style={styles.text}>Name</Text>
      <TextInput style={styles.textInput}/>
    </View>
  )
}

export default InputCategory

const styles = StyleSheet.create({
    contain: {
        paddingTop: 15,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    text: {
        fontSize: 18,
        fontWeight: '400'
    },
    textInput: {
        flex: 1,
        height: 48,
        backgroundColor: '#3F826D',
        marginLeft: 10,
        borderRadius: 6,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#3F826D'
    }
})