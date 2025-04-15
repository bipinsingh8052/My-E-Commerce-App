import { useRouter } from "expo-router";
import { useState } from "react";
import { View,Text, Image, ScrollView, TextInput ,TouchableOpacity} from "react-native";



export default function login() {
    const [value,setvalue]=useState({
        email:"",
        password:""
    })
    const  router=useRouter();
    const gotoHome=()=>{
        router.push("/components/sliderHome")
    }
    const gottoNext=()=>{
        router.push("/components/sliderHome")
    }
  return (
    <ScrollView style={{
        flex:1,
       
    }}>
        <Image style={{height:500, width:"100%", }}  source={{uri:'https://t4.ftcdn.net/jpg/07/64/55/75/360_F_764557526_HlwV6rYpIxrfhrmlpTzl74INFoMmJs9Z.jpg'}}/>
        <View style={{backgroundColor:"red"}}>
            <Text style={{ fontWeight:500, fontSize:30, textAlign:"center", marginBottom:50, marginTop:20, color:"white"}}>Login Page</Text>
            <TextInput placeholder="Enter your Email" style={{borderWidth:1, borderRadius:20, color:"white", margin:20, paddingHorizontal:10}} onChangeText={(e)=>console.log(e)}/>
            <TextInput placeholder="Enter Your Password" style={{borderWidth:1, borderRadius:20, margin:20, paddingHorizontal:10, color:"white"}} onChangeText={(e)=>console.log(e)}/>
            <TouchableOpacity style={{paddingHorizontal:10, paddingVertical:5, backgroundColor:"blue", margin:20,  borderRadius:20}} onPress={gotoHome}>
                <Text style={{textAlign:"center", fontSize:20, color:"white"}} onPress={gottoNext} >Submit</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
  )
}
