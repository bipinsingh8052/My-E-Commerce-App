import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { Text, View ,Image, ScrollView } from 'react-native'

export default function JustForYou() {
  return (
    <View style={{  marginTop:10, marginLeft:10, marginRight:10}}>
    <View style={{height:60,  flexDirection:"row", alignItems:"center", gap:5}}>
      <Text style={{fontSize:22, fontWeight:700}}>Just For You</Text>
      <AntDesign size={20} color={"blue"} name='star'/>
    </View>
    <View style={{flexDirection:"row", flexWrap:"wrap", gap:5}}>
      {
        [1,2,3,5].map((e,index)=>{return(
          <View key={index} style={{height:200,  width:150, elevation:5, marginHorizontal:6, marginVertical:6, borderRadius:5, overflow:"hidden"}}>
      <View  style={{height:150, width:140}}>
        <Image source={{uri:"https://www.thesun.co.uk/wp-content/uploads/2021/12/MT-SHOPPING-OFF-PLATT.jpg?strip=all&quality=100&w=1200&h=800&crop=1"}} style={{height:"96%" ,width:140, left:5 }} />
      </View>
      <Text style={{height:60, padding:5, paddingHorizontal:10, fontSize:16, fontWeight:500}}>lretyuhioikjhgfdrtyuiokjhbgvfghj</Text>
      <Text style={{fontSize:20, fontWeight:800, paddingLeft:10}}>$ 17,00</Text>
      </View>
        )})
      }
   </View>
</View>
  )
}
