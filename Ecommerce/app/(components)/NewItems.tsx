import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { Text, View ,Image, ScrollView } from 'react-native'

export default function NewItems() {
  return (
    <View style={{  marginTop:0, marginLeft:8, marginRight:5}}>
        <View style={{height:60, flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
          <Text style={{fontSize:22, fontWeight:700}}>New Items</Text>
          <View style={{flexDirection:"row", gap:20, alignItems:"center", justifyContent:"center", paddingRight:20}}>
            <Text style={{fontSize:16, fontWeight:700}}> See All</Text>
            <View style={{ backgroundColor:"blue", padding:10, borderRadius:50 }}>
            <AntDesign name="arrowright" size={20} color={"white"}/>
            </View>
          </View>
        </View>
        <ScrollView horizontal>
          {
            [1,2,3,5,6,7,7,7,8,8,8,8,8,8,,8,8,8].map((e,index)=>{return(
              <View key={index} style={{height:300,  width:200, borderWidth:0.1, marginHorizontal:10, borderRadius:5, overflow:"hidden", padding: 3, elevation:0.5, shadowColor: '#000',
                shadowOpacity: 0.25,
                shadowRadius: 8}}>
          <View  style={{height:200, width:200}}>
            <Image source={{uri:"https://www.thesun.co.uk/wp-content/uploads/2021/12/MT-SHOPPING-OFF-PLATT.jpg?strip=all&quality=100&w=1200&h=800&crop=1"}} style={{height:190,width:190, alignSelf:"center", marginRight:6 }} />
          </View>
          <Text style={{height:60, padding:5, paddingHorizontal:10, fontSize:16, fontWeight:500}}>lretyuhioikjhgfdrtyuiokjhbgvfghj</Text>
          <Text style={{fontSize:20, fontWeight:800, paddingLeft:10}}>$ 17,00</Text>
          </View>
            )})
          }
        </ScrollView>
    </View>
  )
}
