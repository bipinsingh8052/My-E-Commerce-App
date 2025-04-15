
import React from 'react'
import { View ,Text, Button, Image} from 'react-native'
import { TouchableOpacity } from 'react-native'

export default function index() {
  return (
    <View style={{flex:1,justifyContent:"center", alignItems:"center"}}>
      <View style={{width:"70%", justifyContent:"center", alignItems:"center", gap:20, flexWrap:"wrap"}}>
        <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP7jvSlNpLmTPdUpkBWGQsEF9h-wOm8s25lQ&s'}} style={{ height:90, width:90, borderWidth:1, borderRadius:50, padding:80}}/>
        <Text style={{fontSize:40, fontWeight:800  } }> Cybrom</Text>
        <Text style={{fontSize:20,  fontWeight:300}}>Beautiful E-Commerce UI Kit for your online store </Text>
      </View>
      <View style={{height:150, width:"100%"}}></View>
      <View>
        <TouchableOpacity style={{backgroundColor:"blue", width:"100%", paddingHorizontal:90, paddingVertical:20, borderRadius:20 }}>
          <Text style={{fontSize:20, color:"white"}}>Let's get started</Text>
        </TouchableOpacity>
        
      </View>
      <View style={{marginTop:30}}>
          <Text> I already have an account <Text style={{backgroundColor:"blue", paddingHorizontal:30,paddingVertical:80, borderRadius:50}}>-></Text></Text>
        </View>


    </View>
  )
}
