import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'

const BotonIcon = () => {
  return (
    <View style={styles.contain}>
      <TouchableOpacity style={styles.buttonWithIcon}
        onPress={() => {
            Alert.alert('Added to Cart', 'Button with Icon -> Add to Cart');
        }}
      >
      <Icon
        color='#fff'
        name='shopping-cart'
        type='font-awesome'
        size={20}
      />
      <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  )
}

export default BotonIcon

const styles = StyleSheet.create({
  contain: {
    width: '100%',
    paddingTop: 15,
    paddingHorizontal: 20,
  },

  buttonWithIcon: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FC427B',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 4,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    },

  buttonText: {
    fontSize: 16,
    marginHorizontal: 12,
    color: '#fff',
    fontWeight: '500',
  }
})