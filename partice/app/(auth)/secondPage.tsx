import { useRouter } from 'expo-router'
import React from 'react'
import { Image, Text, TextInput, View } from 'react-native'
import { TouchableOpacity } from 'react-native'
export default function index() {
    const router=useRouter();
    const backto=()=>{
        router.push("/(auth)")
    }
    const gotonext=()=>{
        router.push("/(auth)/thirdPage")
    }
  return (
  <View style={{flex:1, justifyContent:"center", alignContent:"center", width:"100%"}}>
    <View style={{height:20, width:100}}>

    </View>
    <View style={{width:"70%", marginLeft:20}}><Text style={{fontSize:40, fontWeight:900}}>Create</Text>
    <Text style={{fontSize:40,  fontWeight:900}}> Account</Text>
    </View>
    <View style={{marginLeft:30, marginTop:30}}>
      <Image source={{uri:'https://media.istockphoto.com/id/1350494032/vector/camera-icon-vector-design.jpg?s=612x612&w=0&k=20&c=fQReG30Tc7Nhsbcf2N2r38tJX5cah7sodL5nk4sN-gQ='}} style={{
        height:90,width:90, borderRadius:50
      }}/>
    </View>
    <View style={{padding:20, gap:10}}>
      <TextInput placeholder='Email' style={{width:"100%",  fontSize:20,backgroundColor:"white", borderRadius:20, paddingHorizontal:20}}/>
      <TextInput placeholder='Password' style={{width:"100%", fontSize:20, backgroundColor:"white", borderRadius:20, paddingHorizontal:20}}/>
      <TextInput placeholder='Your number' style={{width:"100%", fontSize:20, backgroundColor:"white", borderRadius:20, paddingHorizontal:20}}/>
    </View>
    <View>
      <TouchableOpacity style={{margin:20, gap:30}}>
        <Text style={{fontSize:20,backgroundColor:"blue", color:"white", textAlign:"center", paddingVertical:10, borderRadius:20}} onPress={gotonext}>Done</Text>
        <Text style={{fontSize:15, color:"black", textAlign:"center", paddingVertical:10, borderRadius:20}} onPress={backto}>cancel</Text>
      </TouchableOpacity>
    </View>
  </View>
  )
}
