import { View } from 'react-native'
import React from 'react'
import InputCategory from '../Components/Input/InputCategory'
import InputCategory2 from '../Components/Input/InputCategory2'
import InputPlaceholder from '../Components/Input/InputPlaceholder'
import InputPlaceholderColor from '../Components/Input/InputPlaceholderColor'
import InputTextIcon from '../Components/Input/InputTextIcon'
import InputTextViewPassword from '../Components/Input/InputTextViewPassword'
import InputPhone from '../Components/Input/InputPhone'
import InputMultiple from '../Components/Input/InputMultiple'

const HomeScreen = () => {
  return (
    <View>
      <InputCategory />
      <InputCategory2 />
      <InputPlaceholder />
      <InputPlaceholderColor />
      <InputTextIcon />
      <InputTextViewPassword />
      <InputPhone />
      <InputMultiple />
    </View>
  )
}

export default HomeScreen