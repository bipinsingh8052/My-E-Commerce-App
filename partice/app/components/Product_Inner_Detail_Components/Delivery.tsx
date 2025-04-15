import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react'
import { Image, ScrollView, Text, TextInput, View } from 'react-native'
import { TouchableOpacity } from 'react-native';

export default function Delivery() {
return(
  <View style={{paddingHorizontal:20, marginTop:10}}> 
    <Text style={{fontSize:20, fontWeight:800}}>Delivery</Text>
    <View style={{gap:10, marginTop:10}}>
      <View style={{borderWidth:1, borderRadius:10, borderColor:"blue", flexDirection:"row", paddingVertical:15, justifyContent:"space-between", paddingHorizontal:15, alignItems:"center"}}>
      <View style={{flexDirection:"row", gap:20}}>
        <Text style={{fontSize:16, fontWeight:700, letterSpacing:1}}>Standart</Text>
        <Text style={{color:"blue", fontStyle:"cursive"}}>5-7 days</Text>
        </View>
          <Text style={{fontSize:16, fontWeight:800, fontStyle:"cursive"}}>$ 3,00</Text>
      </View>
      <View style={{borderWidth:1, borderRadius:10, borderColor:"blue", flexDirection:"row", paddingVertical:15, justifyContent:"space-between", paddingHorizontal:15, alignItems:"center"}}>
      <View style={{flexDirection:"row", gap:20}}>
        <Text style={{fontSize:16, fontWeight:700, letterSpacing:1}}>Standart</Text>
        <Text style={{color:"blue", fontStyle:"cursive"}}>5-7 days</Text>
        </View>
          <Text style={{fontSize:16, fontWeight:800, fontStyle:"cursive"}}>$ 3,00</Text>
      </View>
    </View>
  </View>
  )
}
