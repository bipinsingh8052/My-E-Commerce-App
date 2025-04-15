import React from 'react'
import { Text, View } from 'react-native'
export default function Specifications() {
  return (
   <View style={{paddingHorizontal:20}}>
    <Text style={{fontSize:20, fontWeight:800, marginTop:20, }}> 
       Specifications
    </Text>
    <View style={{marginTop:10}}>
      <Text  style={{fontSize:16, fontWeight:600}}>
        Material
      </Text>
      <View style={{flexDirection:"row", marginTop:5, alignItems:"center" ,gap:10}}>
        <Text style={{padding:5, backgroundColor:"lightgray", borderRadius:5, fontWeight:450}}>
          Cotton 95%
        </Text >
        <Text style={{padding:5, backgroundColor:"lightgray", borderRadius:5, fontWeight:450}} >Nylon 5%</Text>
      </View>
    </View>
    <View style={{marginTop:15}}>
      <Text  style={{fontSize:16, fontWeight:800}}>
        Origin
      </Text>
      <View style={{flexDirection:"row", marginTop:10}}>
        <Text style={{ paddingVertical:5, borderRadius:5, backgroundColor:"lightgray", paddingHorizontal:20}}>
          EU
        </Text>
      </View>
    </View>
   </View>
  )
}
