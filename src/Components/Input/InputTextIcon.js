import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'

const InputTextIcon = () => {
  return (
    <View style={styles.contain}>
        <View style={styles.inputView}>
            <Icon
                color='#333'
                name='user'
                type='font-awesome'
                size={20}
            />
        <TextInput style={styles.InputContent} placeholder={'Full Name'}/>
    </View>

    </View>
  )
}

export default InputTextIcon

const styles = StyleSheet.create({
    contain: {
        width: '100%',
        paddingTop: 15,
        display: 'flex',
        flexDirection: 'column',
        paddingHorizontal: 20,
        paddingBottom: 15,
    },

    inputView: {
        width: '100%',
        height: 48,
        backgroundColor: '#f1f3f6',
        paddingHorizontal: 20,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#3F826D',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },

    InputContent: {
        flex: 1,
        paddingHorizontal: 12
    }
})