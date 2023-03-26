import { StyleSheet, TextInput, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Icon } from 'react-native-elements'

const InputTextViewPassword = () => {
  const [passwordSecured, setPasswordSecured] = useState(true);

  return (
    <View style={styles.contain}>
      <View style={styles.Subcontain}>
        <Icon
            color='#333'
            name='lock'
            type='font-awesome'
            size={20}
        />
        <TextInput style={styles.InputStyle} secureTextEntry={passwordSecured} placeholder={'Password'} textContentType='password'/>
        <TouchableOpacity style={{ padding: 4 }} onPress={() => setPasswordSecured(!passwordSecured)}>
          <Icon
            color='#333'
            name='eye'
            type='font-awesome-5'
            size={20}
          />
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default InputTextViewPassword

const styles = StyleSheet.create({
    contain: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    Subcontain: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderWidth: 1,
        borderRadius: 6,
        borderColor: '#3F826D',
    },
    InputStyle: {
        height: 48,
        flex: 1,
        paddingHorizontal: 12
    }


})