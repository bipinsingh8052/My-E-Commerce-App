import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { Text, View ,Image, ScrollView } from 'react-native'

export default function DiscountHeader() {
  return (
    <View>
      <View style={{height:80, width:"100%",  flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}> 
        <View style={{marginLeft:5}}>
          <Text style={{fontSize:25, fontWeight:800}}> Flash Sale</Text>
          <Text style={{fontSize:12, fontWeight:500,  paddingLeft:10}}>Choose Your Discount</Text>
        </View>
        <View style={{flexDirection:"row", gap:10, alignItems:"center", justifyContent:"center"}}>
          <AntDesign name='clockcircleo' size={25} color={"blue"} />
          <View style={{flexDirection:"row", gap:5}}>
            <Text style={{fontSize:20, padding:10, backgroundColor:"gray", borderRadius:20, textAlign:"center", color:"white", fontWeight:800}}>00</Text>
            <Text style={{fontSize:20, padding:10, backgroundColor:"gray", borderRadius:20, textAlign:"center", color:"white", fontWeight:800}}>36</Text>
            <Text style={{fontSize:20, padding:10, backgroundColor:"gray", borderRadius:20, textAlign:"center", color:"white", fontWeight:800}}>58</Text>
          </View>
        </View>
      </View>
      <View style={{marginTop:10, flexDirection:"row", backgroundColor:"gray", paddingVertical:15, gap:20, marginLeft:20, marginRight:20, borderRadius:20, paddingRight:10, alignItems:"center", justifyContent:"space-around"}}>
        <Text style={{fontWeight:800, fontSize:17}} > ALL</Text>
        <Text style={{fontWeight:800, fontSize:17}}> 10%</Text>
        <Text style={{fontWeight:800, fontSize:17}}> 20%</Text>
        <Text style={{fontWeight:800, fontSize:17}}> 30%</Text>
        <Text style={{fontWeight:800, fontSize:17}}> 40%</Text>
        <Text style={{fontWeight:800, fontSize:17}}> 50%</Text>
      </View>
    </View>
  )
}
