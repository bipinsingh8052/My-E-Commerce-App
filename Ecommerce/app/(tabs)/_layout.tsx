import { Text, View } from 'react-native'
import { Tabs, useRouter } from 'expo-router'
import React, { useEffect } from 'react'
import { AntDesign, Feather, FontAwesome, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function _layout() { 
//   let router=useRouter()
//   let loading=async()=>{
//   const token=await AsyncStorage.getItem('token');
//   if(!token){
//       router.replace("/login")
//   }
// }
// useEffect(()=>{
//   loading()
//   console.log("login")
// },[])
  return (
    <Tabs>
        <Tabs.Screen name='accountpage' options={{title:"Account" ,headerShown:false , tabBarIcon: () => { return(
          <MaterialCommunityIcons size={28} color="black" name='account' />
        )
        }}}/>
        <Tabs.Screen name='categories' options={{title:"Categories",headerShown:false ,tabBarIcon:()=>{return(
          <FontAwesome size={28} color="black" name='opencart'/>
        )}}} />
        <Tabs.Screen name='index' options={{title:"Home" ,headerShown:false,tabBarIcon:()=>{return(
          <View style={{height:60, width:60, borderRadius:50, bottom:20, backgroundColor:"blue", borderWidth:0.5,  justifyContent:'center', alignItems:"center", borderColor:"transparent"}}>
            <Text><AntDesign size={30} color="white" name='home' />
            </Text> 
            </View>
        )}}} />

        <Tabs.Screen name='explorepage' options={{title:"Explore" ,headerShown:false,tabBarIcon:()=>{return(
          <MaterialIcons size={28} color="black" name="explore" />
        )}}}/>
        <Tabs.Screen name='cartpage' options={{title:"Cart",headerShown:false, tabBarIcon:()=>{return(
          <Feather size={28} color="black" name="shopping-cart"/>
        )}}} />
    </Tabs>
  )
}
