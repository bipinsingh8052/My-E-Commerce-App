import axios from 'axios';
import { useRouter } from 'expo-router';
import React, { useState } from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    Alert,
    ImageBackground
  } from 'react-native';
import Toast from 'react-native-toast-message';

export default function Categories() {
  let[input,setinput]=useState({
    email:"",
    password:""
  })
  let[loading,setLoading]=useState(false);
  let router=useRouter();



  let Forgetpassword=()=>{
    router.push("/forGetPassEmail")
  }


  let HomePage=async()=>{
    let api ="https://nexx-js-e-commerce-app-491i.vercel.app/api/login";
    // console.log(input);
    setLoading(true);
    try {
      let res=await axios.post(api,input,{
        headers: {
          'Content-Type': 'application/json'
        }
      })
      // console.log(res.data);
       Toast.show({
                type: 'success', // 'success', 'error', 'info'
                text1: res.data.message,
                text2: "Successfully ", // Optional
                position: 'top', // 'top', 'bottom', 'center'
                visibilityTime: 4000, // Duration in milliseconds
                autoHide: true, // Automatically hide after visibilityTime
              });
      setLoading(false);
      router.push("/(tabs)")
    } catch (err) {
      // console.log(err.response.data,"error");
      Toast.show({
        type: 'success', // 'success', 'error', 'info'
        text1:err.response.data.error,
        text2: "Try again ", // Optional
        position: 'top', // 'top', 'bottom', 'center'
        visibilityTime: 4000, // Duration in milliseconds
        autoHide: true, // Automatically hide after visibilityTime
      });
      setLoading(false);
    }
    finally{
      setLoading(false)
    }
    
  }
  return (
    <>
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ImageBackground source={{uri:"https://plus.unsplash.com/premium_photo-1701534008693-0eee0632d47a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2Vic2l0ZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D"}} style={{height:"100%", width:"100%"}}>
    <View  style={{flex:1, width:"100%", justifyContent:"center", alignItems:"center"}}>
      
      <View style={{height:400,width:"80%" }}>
        <Text style={{
          fontSize: 30,
          fontWeight: 'bold',
          fontFamily: 'Montserrat',
          color: '#000'
        }}>
          Welcome  Back !
        </Text>

        <TextInput
          style={{
            borderWidth: 1,
            borderColor: '#999',
            borderRadius: 6,
            paddingHorizontal: 12,
            paddingVertical: 10,
            marginTop: 24,
            fontSize: 16,
            color: '#000',
            backgroundColor:"lightgray"
          }}

          placeholder="Username or Email"
          placeholderTextColor="#666"
          keyboardType="email-address"
          onChangeText={(e)=>{setinput(pre=>({...pre,email:e}))}}
        />

        <TextInput
          style={{
            borderWidth: 1,
            borderColor: '#999',
            borderRadius: 6,
            paddingHorizontal: 12,
            paddingVertical: 10,
            marginTop: 24,
            fontSize: 16,
            color: '#000',backgroundColor:"lightgray"
          }}
          placeholder="Password"
          placeholderTextColor="#666"
          secureTextEntry
          onChangeText={(e)=>{setinput(pre=>({...pre,password:e}))}}
          
        />

        <TouchableOpacity
          onPress={Forgetpassword}
        >
          <Text style={{
            marginTop: 12,
            color: 'crimson',
            textAlign: 'right',
            fontWeight: '600'
          }}>
            Forgot Password?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={HomePage}
          style={{
            backgroundColor: 'red',
            marginTop: 20,
            paddingVertical: 14,
            borderRadius: 6,
            alignItems: 'center'
          }}
        >
          <Text style={{
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 16
          }}>{(loading)?"Loading...":"Login"}</Text>
        </TouchableOpacity>
      </View>

    
      
    </View>
    </ImageBackground>
  </SafeAreaView>
  <Toast/>
  </>
  )
}
