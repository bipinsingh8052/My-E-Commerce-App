import React from 'react'
import { SafeAreaView, ScrollView, View ,Text} from 'react-native'
import FlashSale from '../(components)/FlashSale'
import DropDownCategories from '../(components)/DropDownCategories'
import Categories from '../(components)/Categories'


export default function categories() {
  return (
   <SafeAreaView>
    <ScrollView showsVerticalScrollIndicator={false}>
      <DropDownCategories/>
      <Categories/>
     <FlashSale/>
    </ScrollView>
   </SafeAreaView>
  )
}
