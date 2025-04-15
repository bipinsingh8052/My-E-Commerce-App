
import { useRouter } from 'expo-router'
import React from 'react'
import { View ,Text, Button, Image} from 'react-native'
import { TouchableOpacity } from 'react-native'

export default function index() {
  const router =useRouter();
  const gottoLogin=()=>{
    router.push("/login")
  }
  const gotoaccount=()=>{
    router.push("/(auth)/secondPage")
  }
  return (
    <View style={{flex:1,justifyContent:"center", alignItems:"center"}}>
      <View style={{width:"70%", justifyContent:"center", alignItems:"center", gap:20, flexWrap:"wrap"}}>
       <View style={{borderWidth:1, borderRadius:80, padding:10, backgroundColor:"white"}} >
       <Image 
        source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP7jvSlNpLmTPdUpkBWGQsEF9h-wOm8s25lQ&s'}}
         style={{ height:90, width:90, borderRadius:100,paddingHorizontal:30}}/> 
       </View>
        <Text style={{fontSize:40, fontWeight:800  } }> Cybrom</Text>
        <Text style={{fontSize:20,  fontWeight:300}}>Beautiful E-Commerce UI Kit for your online store </Text>
      </View>
      <View style={{height:150, width:"100%"}}></View>
      <View>
        <TouchableOpacity style={{backgroundColor:"blue", width:"100%", paddingHorizontal:90, paddingVertical:20, borderRadius:20 }} onPress={gotoaccount}>
          <Text style={{fontSize:20, color:"white"}}>Let's get started</Text>
        </TouchableOpacity>
        
      </View>
      <View style={{marginTop:30, flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
          <Text  > I already have an account </Text>

          <Text 
          style={{backgroundColor:"blue", paddingHorizontal:20,paddingVertical:10, color:"white", fontSize:15, borderRadius:50}} onPress={gottoLogin}>-></Text>
        </View>


    </View>
  )
}
