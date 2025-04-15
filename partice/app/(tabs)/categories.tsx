import React from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import Categories from '../components/Categories'
import AllCategories from '../components/AllCategories'
import DiscountHeader from '../components/DiscountHeader'
import Discount from '../components/Discount'

export default function categories() {
  return (
   <SafeAreaView>
    <ScrollView>
      <AllCategories/>
      <Categories/><DiscountHeader/>
      <Discount/>
    </ScrollView>
   </SafeAreaView>
  )
}
