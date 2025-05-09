
import { TouchableOpacity,Image, Text, View, TextInput } from 'react-native'
import { useRouter } from 'expo-router';
// import {  } from 'react-native;
export default function forGetPassEmail() {
 const router=useRouter();
   const gotoBack=()=>{
     router.push("/login")
   }
   const gotonext=()=>{
     router.push("/forGetPass")
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
           <TextInput placeholder='Enter Your Email Id'  style={{
               borderWidth: 1,
               borderColor: '#999',
               borderRadius: 6,
               width:"80%",
               paddingHorizontal: 12,
               paddingVertical: 10,
               marginTop: 24,
               fontSize: 16,
               color: '#000',backgroundColor:"lightgray"
          }}
          placeholderTextColor="#666"
          secureTextEntry keyboardType="email-address"/>
           <TextInput placeholder='Enter Your Number' style={{
            borderWidth: 1,
            borderColor: '#999',
            borderRadius: 6,
            width:"80%",
            paddingHorizontal: 12,
            paddingVertical: 10,
            marginTop: 24,
            fontSize: 16,
            color: '#000',backgroundColor:"lightgray"
          }}
          placeholderTextColor="#666"
          secureTextEntry keyboardType="phone-pad" />
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
