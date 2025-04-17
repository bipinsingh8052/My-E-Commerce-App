// import { useRouter } from 'expo-router'
// import React from 'react'
// import { Image, Text, TextInput, View } from 'react-native'
// import { TouchableOpacity } from 'react-native'
// export default function index() {
//     const router=useRouter();
//     const backto=()=>{
//         router.push("/sipper")
        
//     }
//     const gotonext=()=>{
//         router.push("/login")
//     }
//     const gotoLoginPage=()=>{
//         router.push("/login")
//     }
//   return (
//   <View style={{flex:1, justifyContent:"center", alignContent:"center", width:"100%"}}>
//     <View style={{height:20, width:100}}>

//     </View>
//     <View style={{width:"70%", marginLeft:20}}><Text style={{fontSize:40, fontWeight:900}}>Create</Text>
//     <Text style={{fontSize:40,  fontWeight:900}}> Account</Text>
//     </View>
//     <View style={{marginLeft:30, marginTop:30}}>
//       <Image source={{uri:'https://media.istockphoto.com/id/1350494032/vector/camera-icon-vector-design.jpg?s=612x612&w=0&k=20&c=fQReG30Tc7Nhsbcf2N2r38tJX5cah7sodL5nk4sN-gQ='}} style={{
//         height:90,width:90, borderRadius:50
//       }}/>
//     </View>
//     <View style={{padding:20, gap:10}}>
//       <TextInput placeholder='Email' style={{width:"100%",  fontSize:20,backgroundColor:"white", borderRadius:20, paddingHorizontal:20}}/>
//       <TextInput placeholder='Password' style={{width:"100%", fontSize:20, backgroundColor:"white", borderRadius:20, paddingHorizontal:20}}/>
//       <TextInput placeholder='Your number' style={{width:"100%", fontSize:20, backgroundColor:"white", borderRadius:20, paddingHorizontal:20}}/>
//     </View>
//     <View style={{paddingHorizontal:20}}>
//         <TouchableOpacity style={{flexDirection:"row", alignItems:"center", justifyContent:"center", marginTop:10, marginBottom:10}} onPress={gotoLoginPage}>
//             <Text>If you have allready account : </Text>
//             <Text style={{fontWeight:500,fontSize:14, borderRadius:20, color:"Red", textDecorationLine:"underline"}}>login</Text>
//         </TouchableOpacity>
//     </View>
//     <View>
//       <TouchableOpacity style={{margin:20, gap:30}}>
//         <Text style={{fontSize:20,backgroundColor:"blue", color:"white", textAlign:"center", paddingVertical:10, borderRadius:20}} onPress={gotonext}>Done</Text>
//         <Text style={{fontSize:15, color:"black", textAlign:"center", paddingVertical:10, borderRadius:20}} onPress={backto}>cancel</Text>
//       </TouchableOpacity>
//     </View>
//   </View>
//   )
// }

import { useRouter } from 'expo-router';
import React from 'react';
import {
  Image,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ImageBackground,
  Pressable,
} from 'react-native';

export default function Index() {
  const router = useRouter();

  const backto = () => {
    router.push('/sipper');
  };

  const gotonext = () => {
    router.push('/login');
  };

  const gotoLoginPage = () => {
    router.push('/login');
  };

  return (
    <ImageBackground
      source={{
        uri: 'https://images.unsplash.com/photo-1520975918311-7f61d4dc18c5?auto=format&fit=crop&w=1950&q=80',
      }}
      style={{
        flex: 1,
        justifyContent: 'center',
      }}
      blurRadius={3}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.4)',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            padding: 25,
            width: '85%',
            backgroundColor: 'rgba(255,255,255,0.95)',
            borderRadius: 20,
            shadowColor: '#000',
            shadowOpacity: 0.25,
            shadowRadius: 8,
            elevation: 10,
          }}
        >
          <Text
            style={{
              fontSize: 36,
              fontWeight: '900',
              color: '#222',
              marginBottom: 20,
              textAlign: 'left',
            }}
          >
            Create{'\n'}Account
          </Text>

          <Image
            source={{
              uri: 'https://t3.ftcdn.net/jpg/00/79/36/04/360_F_79360425_13tH0FGR7nYTNlXWKOWtLmzk7BAikO1b.jpg',
            }}
            style={{
              height: 90,
              width: 90,
              borderRadius: 45,
              alignSelf: 'start',
              marginBottom: 20, 
              borderWidth: 2,
              borderColor: '#007bff',
            }}
            resizeMode="contain"
          />

          <View style={{ gap: 15, marginBottom: 20 }}>
            <TextInput
              placeholder="Email"
              placeholderTextColor="#999"
              style={{
                backgroundColor: '#f1f1f1',
                paddingHorizontal: 20,
                paddingVertical: 12,
                borderRadius: 15,
                fontSize: 16,
                color: '#333',
              }}
              keyboardType="email-address"
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor="#999"
              secureTextEntry
              style={{
                backgroundColor: '#f1f1f1',
                paddingHorizontal: 20,
                paddingVertical: 12,
                borderRadius: 15,
                fontSize: 16,
                color: '#333',
              }}
            />
            <TextInput
              placeholder="Your number"
              placeholderTextColor="#999"
              keyboardType="numeric"
              style={{
                backgroundColor: '#f1f1f1',
                paddingHorizontal: 20,
                paddingVertical: 12,
                borderRadius: 15,
                fontSize: 16,
                color: '#333',
              }}
              
            />
          </View>

          <TouchableOpacity
            style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 20 }}
            onPress={gotoLoginPage}
          >
            <Text style={{ fontSize: 14, color: '#444' }}>Already have an account? </Text>
            <Text
              style={{
                fontSize: 14,
                color: '#e63946',
                fontWeight: 'bold',
                textDecorationLine: 'underline',
              }}
            >
              Login
            </Text>
          </TouchableOpacity>

          <Pressable
            onPress={gotonext}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? '#0056b3' : '#007bff',
                paddingVertical: 12,
                borderRadius: 20,
                marginBottom: 10,
              },
            ]}
          >
            <Text
              style={{
                color: '#fff',
                fontSize: 18,
                textAlign: 'center',
              }}
            >
              Done
            </Text>
          </Pressable>

          <Pressable onPress={backto}>
            <Text
              style={{
                color: '#333',
                fontSize: 16,
                textAlign: 'center',
                textDecorationLine: 'underline',
                marginTop: 10,
              }}
            >
              Cancel
            </Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
}
