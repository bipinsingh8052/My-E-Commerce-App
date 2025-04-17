import React from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import  SearchBar  from '../(components)/SearchBar'
import ShopViewProject from '../(components)/ShopViewProject'
import Categories from '../(components)/Categories'
import TopProduct from '../(components)/TopProducts'
import FlashSale from '../(components)/FlashSale'
import NewItems from '../(components)/NewItems'



export default function index() {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        <SearchBar/>
        <ShopViewProject/>
        <Categories/>
        <TopProduct/>
        
        <FlashSale/>
        <NewItems/>

      </ScrollView>
    </SafeAreaView>
  )
}
