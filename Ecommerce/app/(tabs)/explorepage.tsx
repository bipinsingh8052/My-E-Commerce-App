import React from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import DiscountHeader from '../(components)/ExploreComponents/DiscountHeader'
import DiscountPage from '../(components)/ExploreComponents/DiscountPage'
import NewItems from '../(components)/NewItems'
import Discover from '../(components)/ExploreComponents/Discover'
import AllItems from '../(components)/AllItems'
export default function explorepage() {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <DiscountHeader/>
        <DiscountPage/>
        <NewItems/>
        <Discover/>
        <AllItems/>
        
      </ScrollView>
    </SafeAreaView>
  )
}
