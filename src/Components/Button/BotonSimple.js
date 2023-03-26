import { StyleSheet, Button, View, Alert, Text } from 'react-native'
import React from 'react'

const BotonSimple = () => {
  return (
    <View style={styles.contain}>
      <Button title="Boton" onPress={() => Alert.alert('Welcome a React Native')}/>
    </View>
  )
}

export default BotonSimple

const styles = StyleSheet.create({
  contain: {
    width: '100%',
    paddingTop: 15,
    paddingHorizontal: 20,
  },
});