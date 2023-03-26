import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Icon, Input } from 'react-native-elements'


const InputPhone = () => {
  const [pinSecure, setPinSecure] = useState(true);

  return (
    <View style={styles.contain}>
      <Input placeholder="Phone Number" rightIcon={
        <Icon
          name='phone'
          type='font-awesome'
          size={24}
          color='#444'
        />
        }
        autoCorrect={false}
        keyboardType='phone-pad'
        textContentType='telephoneNumber'
      />
    </View>
  )
}

export default InputPhone

const styles = StyleSheet.create({
    contain: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 20
    },

})