import { StyleSheet, View, ActivityIndicator } from 'react-native'
import React from 'react'

const SpinnerIo = () => {
  return (
    <View style={styles.container}>
      {/* Small */}
      <ActivityIndicator color='#f7bc05' size='small' />
      {/* Large */}
      <ActivityIndicator color='#ff703f' size='large' />
      <ActivityIndicator color='#fa2e59' size='large' />
    </View>
  )
}

export default SpinnerIo

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    justifyContent: 'center',
    alignItems: 'center'
  }
})