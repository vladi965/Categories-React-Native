import { StyleSheet, View, Switch, Text } from 'react-native'
import React, { useState } from 'react'

const SwitchIo = () => {
  const [switchVal, setSwitchVal] = useState(false)

  return (
    <View style={styles.contain}>
      <Switch
        rackColor={{ false: '#386dbd', true: '#fa2e59' }}
        thumbColor={switchVal ? '#386dbd' : '#fa2e59'}
        onValueChange={() => setSwitchVal((prevVal) => !prevVal)}
        value={switchVal}
      />
      <Text>The switch is</Text>
    </View>
  )
}

export default SwitchIo

const styles = StyleSheet.create({
    contain: {
        paddingTop: 25,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
