
import { TouchableOpacity,Image, Text, View, TextInput } from 'react-native'
import { useRouter } from 'expo-router';
// import {  } from 'react-native;

export default function index() {
  const router=useRouter();
  const gotoBack=()=>{
    router.push("/(auth)/sevenPage")
  }
  const gotonext=()=>{
    router.push("/(auth)/ninePage")
  }
  return (
    <View style={{flex:1, justifyContent:"center", alignItems:"center", width:"100%"}}>
      <View style={{height:20, width:"100%"}}></View>
      <View style={{justifyContent:"center", gap:20, alignItems:"center"}}>
        <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBvqzyx_zoi6q2c0Gd1XnE7wysD9PGOLe3-A&s'}} style={{height:120, width:120, borderRadius:100, borderWidth:1, paddingHorizontal:20}}/>
        <Text style={{fontSize:25, fontWeight:900} }>Setup New Password</Text>
        <View style={{flexWrap:'wrap' ,width:"70%"}}>
        <Text style={{fontSize:15, fontWeight:300}}>Please ,setup a new password for  </Text>
        <Text style={{textAlign:"center", fontSize:15, fontWeight:300}}>your account</Text>
         </View>
        

      </View>
      <View style={{ justifyContent:"center", alignItems:"center", width:"100%", marginTop:30, gap:20, padding:20}}>
          <TextInput placeholder='New Password' style={{textAlign:"center", width:"100%", borderRadius:20, backgroundColor:"white"}}/>
          <TextInput placeholder='Repeat Password' style={{textAlign:"center", width:"100%", borderRadius:20, backgroundColor:"white"}}/>
        </View>
     
      <View style={{width:"100%", gap:20, padding:20, marginTop:120,  }}>
        <TouchableOpacity>
          <Text style={{backgroundColor:"red", color:"white",borderRadius:20 ,  fontSize:20, width:"100%", textAlign:"center", paddingVertical:15 }} onPress={gotonext}>Save</Text>
         
        </TouchableOpacity>
        <TouchableOpacity>
        <Text style={{textAlign:"center", fontSize:15}} onPress={gotoBack}> Cancel</Text>
        </TouchableOpacity>
      </View>
      </View>
  )
}


