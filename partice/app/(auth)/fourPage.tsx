import { useRouter } from 'expo-router'
import React from 'react'
import { Image, Text, TextInput, View } from 'react-native'

export default function index() {
  const router=useRouter();
  const gotonext=()=>{
    router.push("/(auth)/fivePage")
  }
  return (
    <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
      <View style={{height:20, width:"100%"}}></View>
      <View style={{justifyContent:"center", gap:20, alignItems:"center"}}>
        <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBvqzyx_zoi6q2c0Gd1XnE7wysD9PGOLe3-A&s'}} style={{height:120, width:120, borderRadius:100, borderWidth:1, paddingHorizontal:20}}/>
        <Text style={{fontSize:25, fontWeight:900} }>Hello, Bipin !!</Text>
        <Text style={{fontSize:22, fontWeight:300}}> Type your password</Text>
      </View>
      <View style={{flexDirection:"row", gap:20, marginTop:20}}>
        <TextInput  style={{ height:40, width:40, backgroundColor:"white", borderRadius:10}}/>
        <TextInput  style={{ height:40, width:40, backgroundColor:"white" ,borderRadius:10}}/>
        <TextInput  style={{ height:40, width:40, backgroundColor:"white",borderRadius:10}}/>
        <TextInput  style={{ height:40, width:40, backgroundColor:"white",borderRadius:10}}/>

      </View>
      <View style={{height:40, width:"100%"
      }}>

      </View>
      <View style={{flexDirection:"row", gap:10}} >
        <Text style={{fontSize:15,  color:"black", paddingTop:5}}>Not you?</Text>
        <Text  style={{fontSize:15, backgroundColor:"blue", paddingHorizontal:10, paddingVertical:5, borderRadius:50, color:"white"}} onPress={gotonext}>-></Text>
      </View>
    </View>
  )
}
