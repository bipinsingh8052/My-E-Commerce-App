import React from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import Profile from '../components/Profile'

export default function accountpage() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Profile />
      </ScrollView>
    </SafeAreaView>
  )
}
