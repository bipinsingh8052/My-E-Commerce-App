import { Stack } from 'expo-router'
import React from 'react'

export default function Paymentlayout() {
  return (
    <Stack screenOptions={{headerShown: false}} >
        <Stack.Screen name='index' />
        <Stack.Screen name='setting' />
        <Stack.Screen name='wishList' />
        <Stack.Screen name='wishCart' />
    </Stack>
  )
}
