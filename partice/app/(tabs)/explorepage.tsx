import React from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import Shop from '../components/Shop'
import Discount from '../components/Discount'
import DiscountHeader from '../components/DiscountHeader'
import NewItems from '../components/NewItems'
import Discover from '../components/Discover'
import AllItems from '../components/AllItems'
export default function explorepage() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Shop/>
        <DiscountHeader/>
        <Discount/>
        <NewItems/><Discover/>
        <AllItems/>
        
      </ScrollView>
    </SafeAreaView>
  )
}
