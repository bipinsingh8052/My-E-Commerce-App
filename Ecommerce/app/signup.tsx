

import  axios  from 'axios';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {  Image,  Text,  TextInput,  View,  TouchableOpacity,  ImageBackground, Pressable, Alert, ToastAndroid,} from 'react-native';
import Toast from 'react-native-toast-message';

export default function Index() {
  let[input,setInput]=useState({
    name:"",
    email:"",
    password:""
  })
  let[loading,setLoading]=useState(false)
  const router = useRouter();

  const backto = () => {
    router.push('/sipper');
  };

  const SignUpBtn = async() => {
   
      setLoading(true);
      // 
    //   const { name, email, password } = input;
    // console.log(name, email, password, "data");

      try {
        const res = await axios.post(
          'https://nexx-js-e-commerce-app-491i.vercel.app/api/register',
          input,
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        );
  
        // console.log(res.data, 'response data');
        Toast.show({
          type: 'success', // 'success', 'error', 'info'
          text1: res.data.message,
          text2: "Successfully completed", // Optional
          position: 'top', // 'top', 'bottom', 'center'
          visibilityTime: 4000, // Duration in milliseconds
          autoHide: true, // Automatically hide after visibilityTime
        });
        router.push("/login")
        
  
      } catch (err) {
        // console.log(err.response.data,"error");
        Toast.show({
          type: 'error', // 'success', 'error', 'info'
          text1: err.response.data.error,
          text2: 'Try again !!!', // Optional
          position: 'top', // 'top', 'bottom', 'center'
          visibilityTime: 4000, // Duration in milliseconds
          autoHide: true, // Automatically hide after visibilityTime
        });
      } finally {
        setLoading(false);
      }
    };

  const gotoLoginPage = () => {
    router.push('/login');
  };

  return (
    <>
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
              onChangeText={(e)=>{setInput(pre=>({...pre,email:e}))}}
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
              onChangeText={(e)=>{setInput(pre=>({...pre,password:e}))}}
            />
            <TextInput
              placeholder="Enter your Name"
              placeholderTextColor="#name"
              style={{
                backgroundColor: '#f1f1f1',
                paddingHorizontal: 20,
                paddingVertical: 12,
                borderRadius: 15,
                fontSize: 16,
                color: '#333',
              }}
              keyboardType="default"
              onChangeText={(e)=>{setInput(pre=>({...pre,name:e}))}}
              
            />
          </View>

          <TouchableOpacity
            style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 20 }}
            onPress={()=>{gotoLoginPage()}}
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
            onPress={SignUpBtn}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? '#0056b3' : '#007bff',
                paddingVertical: 12,
                borderRadius: 20,
                marginBottom: 10,
              },
            ]}
          >
            {
              (loading)?
              <Text
              style={{
                color: '#fff',
                fontSize: 18,
                textAlign: 'center',
              }}
            >
              Loading...
            </Text>
              :<Text
              style={{
                color: '#fff',
                fontSize: 18,
                textAlign: 'center',
              }}
            >
              Done
            </Text>
            }
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
    
    <Toast/></>
  );
}
