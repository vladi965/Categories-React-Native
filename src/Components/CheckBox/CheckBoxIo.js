import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { CheckBox } from 'react-native-elements'

const CheckBoxIo = () => {
  const [checkBoxValue, setCheckBoxValue] = useState(false);
  const [circleCheckBoxValue, setCircleCheckBoxValue] = useState(false);
  const [coloredCheckBoxValue, setColoredCheckBoxValue] = useState(false);

  return (
    <View>
       {/* Square Checkbox */}
       <CheckBox
        containerStyle={{ marginLeft: 0, width: '100%' }}
        title={'Square Checkbox'}
        checked={checkBoxValue}
        onPress={() => setCheckBoxValue(!checkBoxValue)}
      />
    </View>
  )
}

export default CheckBoxIo

const styles = StyleSheet.create({})