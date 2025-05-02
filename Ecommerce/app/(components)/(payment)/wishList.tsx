import React from 'react'
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native'
import WishCart from '../Product_Details_All/WishCart'

export default function wishList() {
  return (
    <SafeAreaView>
         <ScrollView showsHorizontalScrollIndicator={false}>
            <View style={{paddingHorizontal:20,  marginBottom:20}}>
                <Text style={{fontSize:24, fontWeight:800}}>Wishlist</Text>
            </View>
            <View>
                <Text style={{marginTop:10, paddingLeft:10, fontSize:18, fontWeight:700}}> Recently viewed</Text>
            <ScrollView horizontal style={{marginTop:10, paddingLeft:15, marginBottom:10}}>
                {
                [1,2,3,4,5,6,7].map((e,index)=>{return(
                    <Image key={index} source={{uri:"https://www.thesun.co.uk/wp-content/uploads/2021/12/MT-SHOPPING-OFF-PLATT.jpg?strip=all&quality=100&w=1200&h=800&crop=1"}} style={{height:60, width:60, borderRadius:50, marginLeft:15, borderColor:"blue", borderWidth:1}}/>
                )})
                }
            </ScrollView>
            {/* <LikeCart/> */}
        <WishCart/>
            </View>
       
        </ScrollView>
    </SafeAreaView>
  )
}
