import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { Text, View ,Image, ScrollView } from 'react-native'


export default function Mostpopular() {
 
  return (
    <View style={{height:350,  marginTop:10, marginLeft:10, marginRight:10}}>
        <View style={{height:60, flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
          <Text style={{fontSize:22, fontWeight:700}}>Most Popular</Text>
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
              <View key={index} style={{height:250,  width:200, elevation:5, borderWidth:1, marginHorizontal:20, borderRadius:5, overflow:"hidden"}}>
          <View  style={{height:200, width:200}}>
            <Image source={{uri:"https://www.thesun.co.uk/wp-content/uploads/2021/12/MT-SHOPPING-OFF-PLATT.jpg?strip=all&quality=100&w=1200&h=800&crop=1"}} style={{height:"96%" ,width:"96%" }} />
          </View>
          <View style={{flexDirection:"row",justifyContent:"space-between", paddingHorizontal:10 }}>
            <Text style={{textAlign:"center", fontSize:20, fontWeight:700}}>
              1780 <AntDesign name='heart' size={20} color={"blue"} />
            </Text>
            <Text style={{fontSize:17, fontWeight:200, marginRight:10}}>New</Text>
          </View>
          </View>
            )})
          }
        </ScrollView>
    </View>
  )
}
