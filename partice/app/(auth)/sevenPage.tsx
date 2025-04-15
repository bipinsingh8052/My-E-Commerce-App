
import { TouchableOpacity,Image, Text, View, TextInput } from 'react-native'
import { useRouter } from 'expo-router';
// import {  } from 'react-native;

export default function index() {
  const router=useRouter();
  const gotoBack=()=>{
    router.push("/(auth)/sixPage")
  }
  const gotonext=()=>{
    router.push("/(auth)/eightPage")
  }
  return (
    <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
      <View style={{height:20, width:"100%"}}></View>
      <View style={{justifyContent:"center", gap:20, alignItems:"center"}}>
        <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBvqzyx_zoi6q2c0Gd1XnE7wysD9PGOLe3-A&s'}} style={{height:120, width:120, borderRadius:100, borderWidth:1, paddingHorizontal:20}}/>
        <Text style={{fontSize:25, fontWeight:900} }>Password Recovery</Text>
        <View style={{flexWrap:'wrap' ,width:"70%"}}>
        <Text style={{fontSize:15, fontWeight:300}}>Enter 4-digit code we sent you </Text>
        <Text style={{textAlign:"center", fontSize:15, fontWeight:300}}>on your phone number</Text>
        </View>
        <View>
          <Text style={{fontWeight:800, fontSize:15}}>+98********00</Text>
        </View>

      </View>
      <View style={{flexDirection:"row", gap:20, marginTop:40}}>
      <TextInput style={{height:40, width:40, borderRadius:100, backgroundColor:"white"}}/>
      <TextInput style={{height:40, width:40, borderRadius:100, backgroundColor:"white"}}/>
      <TextInput style={{height:40, width:40, borderRadius:100, backgroundColor:"white"}}/>
      <TextInput style={{height:40, width:40, borderRadius:100, backgroundColor:"white"}}/>
      </View>
      <View style={{width:"100%", gap:20, padding:20, marginTop:120, justifyContent:"center", alignItems:"center"}}>
        <TouchableOpacity>
          <Text style={{backgroundColor:"red", color:"white",borderRadius:20 ,textAlign:"center", paddingHorizontal:30, paddingVertical:15, fontSize:20, width:"80%"}} onPress={gotonext}>Send Again</Text>
         
        </TouchableOpacity>
        <TouchableOpacity>
        <Text style={{textAlign:"center", fontSize:15}} onPress={gotoBack}> Cancel</Text>
        </TouchableOpacity>
      </View>
      </View>
  )
}


