import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import React from 'react'

const BotonColor = () => {
  return (
    <View style={styles.contain}>
      <TouchableOpacity style={styles.smallButton} onPress={() => {
        Alert.alert('Submit Button Pressed', 'Colored Button -> Small Button');
      }}
      >
        <Text style={styles.smallButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

export default BotonColor

const styles = StyleSheet.create({
  contain: {
        width: '100%',
        paddingTop: 15,
        paddingHorizontal: 20,
  },
  smallButton: {
    backgroundColor: '#3F826D',
    paddingTop: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
        width: 2,
        height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },
  smallButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})