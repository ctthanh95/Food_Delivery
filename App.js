import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CustomDrawer from './navigation/CustomDrawer'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name='Home' component={CustomDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

