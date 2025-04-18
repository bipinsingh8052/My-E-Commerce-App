import React from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import  SearchBar  from '../(components)/SearchBar'
import ShopViewProject from '../(components)/ShopViewProject'
import Categories from '../(components)/Categories'
import TopProduct from '../(components)/TopProducts'
import FlashSale from '../(components)/FlashSale'
import NewItems from '../(components)/NewItems'
import Mostpopular from '../(components)/MostPopular'
import JustForYou from '../(components)/JustForYou'
import AllItems from '../(components)/AllItems'



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
        <Mostpopular/>
        <JustForYou/>
        <AllItems/>

      </ScrollView>
    </SafeAreaView>
  )
}
