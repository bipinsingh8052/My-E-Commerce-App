import React from 'react'
import { SafeAreaView, ScrollView, View ,Text} from 'react-native'
import FlashSale from '../(components)/FlashSale'


export default function categories() {
  return (
   <SafeAreaView>
    <ScrollView showsVerticalScrollIndicator={false}>
     <FlashSale/>
    </ScrollView>
   </SafeAreaView>
  )
}
