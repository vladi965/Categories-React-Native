import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/Screens/HomeScreen';
import ButtonScreen from './src/Screens/ButtonScreen';
import SpinnerScreen from './src/Screens/SpinnerScreen';
import SwitchScreen from './src/Screens/SwitchScreen';
import CheckBoxScreen from './src/Screens/CheckBoxScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        {/* <Stack.Screen name="Button" component={ButtonScreen} /> */}
        {/* <Stack.Screen name="Spinner" component={SpinnerScreen} /> */}
        {/* <Stack.Screen name="Switch" component={SwitchScreen} /> */}
        <Stack.Screen name="CheckBox" component={CheckBoxScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


