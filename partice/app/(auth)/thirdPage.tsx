import { useRouter } from 'expo-router'
import React from 'react'
import { Text, TextInput, View } from 'react-native'
import { TouchableOpacity } from 'react-native'

export default function index() {
  const router=useRouter();
  const gotoBack=()=>{
    router.push("/(auth)/secondPage")
  }
  const gotonext=()=>{
    router.push("/(auth)/fourPage")
  }
  return (
    <View style={{flex:1, justifyContent:"start",alignItems:"end"}}>
      <View style={{height:400, width:"100%"}}>

      </View>
      <View style={{gap:15, paddingLeft:20}}>
        <Text style={{fontSize:35, fontWeight:900}}>
          Login
        </Text>
        <Text style={{fontSize:15}}>
          Good to see you Back
        </Text>
      </View>
      <View style={{marginTop:20, padding:20}}>
        <TextInput placeholder='Email' style={{backgroundColor:"white", paddingLeft:20, borderRadius:20, fontSize:15, color:"black"}}/>
      </View>
      <View>
        <TouchableOpacity style={{padding:20}}>
          <Text style={{backgroundColor:"blue", borderRadius:30, paddingVertical:15, textAlign:"center", fontSize:20, color:"white" }} onPress={gotonext}>Next</Text>
        </TouchableOpacity>
        <Text style={{textAlign:"center"}} onPress={gotoBack}>Cancel</Text>
      </View>

    </View>

  )
}
