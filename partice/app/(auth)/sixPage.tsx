import React, { useState } from 'react'
import Checkbox from 'expo-checkbox';
import { TouchableOpacity,Image, StyleSheet, Text, View } from 'react-native'
import { useRouter } from 'expo-router';
// import {  } from 'react-native;

export default function index() {
  const [isChecked, setChecked] = useState(false);
  const [isChecke, setChecke] = useState(false);
  const router=useRouter();
  const gotoBack=()=>{
    router.push("/(auth)/fivePage")
  }
  const gotonext=()=>{
    router.push("/(auth)/sevenPage")
  }
  return (
    <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
      <View style={{height:20, width:"100%"}}></View>
      <View style={{justifyContent:"center", gap:20, alignItems:"center"}}>
        <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBvqzyx_zoi6q2c0Gd1XnE7wysD9PGOLe3-A&s'}} style={{height:120, width:120, borderRadius:100, borderWidth:1, paddingHorizontal:20}}/>
        <Text style={{fontSize:25, fontWeight:900} }>Password Recovery</Text>
        <View style={{flexWrap:'wrap' ,width:"70%"}}>
        <Text style={{fontSize:15, fontWeight:300}}>How you would like to restore </Text>
        <Text style={{textAlign:"center", fontSize:15, fontWeight:300}}>your password?</Text>
        </View>

      </View>
      <View style={{gap:20, marginTop:30}} >
      
        <View style={{flexDirection:"row", alignItems:"center", justifyContent:"center", backgroundColor:"white",
          paddingRight:20,
          paddingLeft:80,
          borderRadius:50
        }}>
        <Text  style={{marginRight:40, fontSize:18, fontWeight:500}}>SMS</Text>
        <Checkbox
          style={{margin:8, borderRadius:50}}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#4630EB' : undefined}
        />
        
      </View>

      <View style={{flexDirection:"row", alignItems:"center", justifyContent:"center", backgroundColor:"white",
          paddingRight:20,
          paddingLeft:80,
          borderRadius:50
        }}>
        <Text  style={{marginRight:40, fontSize:18, fontWeight:500}}>Email</Text>
        <Checkbox
          style={{margin:8, borderRadius:50}}
          value={isChecke}
          onValueChange={setChecke}
          color={isChecked ? '#4630EB' : undefined}
        />
        
      </View>
      </View>
      <View style={{width:"100%", gap:20, padding:20, marginTop:120}}>
        <TouchableOpacity>
          <Text style={{backgroundColor:"blue", color:"white",borderRadius:20 ,textAlign:"center", paddingVertical:15, fontSize:20, width:"100%"}} onPress={gotonext}>Next</Text>
         
        </TouchableOpacity>
        <TouchableOpacity>
        <Text style={{textAlign:"center", fontSize:15}} onPress={gotoBack}> Cancel</Text>
        </TouchableOpacity>
      </View>
      </View>



  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 32,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
  },
});