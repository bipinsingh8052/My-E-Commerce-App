import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { Text, View ,Image, ScrollView } from 'react-native'

export default function Discount() {
  return (
    <View style={{height:400,  marginTop:10, marginLeft:10, marginRight:10}}>
    <View style={{height:60, flexDirection:"row", alignItems:"center", justifyContent:"space-between", gap:5}}>
      <Text style={{fontSize:22, fontWeight:700}}>20 % Discount</Text>
     <View  style={{ justifyContent:"flex-end"}}>
     <AntDesign size={25} color={"brown"} name="barchart"/>
     </View>
    </View>
    

    
    <ScrollView horizontal style={{flexDirection:"row", flexWrap:"wrap", gap:5}}>
      {
        [1,2,3,5].map((e,index)=>{return(
          <View key={index} style={{height:300,  width:180, elevation:5, marginHorizontal:6, marginVertical:6, borderRadius:5, overflow:"hidden"}}>
      <View  style={{height:200, width:180}}>
        <Image source={{uri:"https://www.thesun.co.uk/wp-content/uploads/2021/12/MT-SHOPPING-OFF-PLATT.jpg?strip=all&quality=100&w=1200&h=800&crop=1"}} style={{height:"96%" ,width:"96%" }} />
        <Text style={{position:"relative", top:-195, right:-130, backgroundColor:"red", padding:20, borderBottomLeftRadius:50, color:"white", fontSize:13}}>20%</Text>
      </View>
      <Text style={{height:60, padding:5, paddingHorizontal:10, fontSize:16, fontWeight:500}}>lretyuhioikjhgfdrtyuiokjhbgvfghj</Text>
      <Text style={{fontSize:20, fontWeight:800, paddingLeft:10}}>$ 17,000</Text>
      </View>
        )})
      }
   </ScrollView>
   
</View>
  )
}
