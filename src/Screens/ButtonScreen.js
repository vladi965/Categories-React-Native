import { View } from 'react-native'
import React from 'react'
import BotonSimple from '../Components/Button/BotonSimple'
import BotonColor from '../Components/Button/BotonColor'
import BotonIcon from '../Components/Button/BotonIcon'
import BotonAnimation from '../Components/Button/BotonAnimation'

const ButtonScreen = () => {
  return (
    <View>
      <BotonSimple />
      <BotonColor />
      <BotonIcon />
      <BotonAnimation />
    </View>
  )
}

export default ButtonScreen
