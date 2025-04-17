import React from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import Profile from '../(components)/AccountPageComponent/Profile'

export default function accountpage() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Profile/>
      </ScrollView>
    </SafeAreaView>
  )
}
