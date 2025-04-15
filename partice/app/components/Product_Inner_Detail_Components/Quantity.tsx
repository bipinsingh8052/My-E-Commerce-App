import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react'
import { Image, ScrollView, Text, TextInput, View } from 'react-native'
import { TouchableOpacity } from 'react-native';

export default function Quantity() {
  let[size,setSize]=useState(false);
  let[input,setInput]=useState(1)
  return (
   <View>
     {
      size?
      <View style={{paddingHorizontal:15}}>
        <View style={{gap:10}}>
          <Text style={{fontSize:15, fontWeight:600}}>Color Options</Text>
        
          <ScrollView horizontal style={{gap:20}}>
          
           {
            [1,2,3,4,5,6].map((e,index)=>{
              return(
                <View style={{marginLeft:10}}  key={index}>
                <Image source={{uri:"https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg"}} style={{height:80, width:80, borderRadius:5}}  /> 
                </View>
              )
            })
           }
       
          </ScrollView>

          <View style={{marginTop:5}}>
            <Text style={{fontSize:15, fontWeight:600}}>
              Size
            </Text>

            <ScrollView horizontal>
            <View style={{flexDirection:"row", gap: 10, marginTop:10}}>
              {
                ["S","M" ,"L" ,"XL" ,"XXL" ,"XXL"].map((e,index)=>{return(
                  <Text key={index} style={{paddingHorizontal:20, backgroundColor:"lightgray", borderRadius:5, paddingVertical:5, fontWeight:500}}>{e} </Text>
                )})
               
                
              }
               </View>
            </ScrollView>
            <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center", marginTop:20}}>

              <Text style={{fontSize:20, fontWeight:600}}>Quantity</Text>
              <View style={{flexDirection:"row" ,gap:20}}>
                <TouchableOpacity style={{backgroundColor:"lightgray" ,paddingHorizontal:20, paddingVertical:10, borderRadius:100, borderColor:"blue", borderWidth:1}} onPress={()=>{setInput(input-1)}}>
                  <Text style={{fontSize:26, textAlign:"center", fontWeight:800}}>-</Text>
                </TouchableOpacity>
                <Text style={{backgroundColor:"lightgray", borderRadius:5, alignSelf:"center", paddingHorizontal:20, paddingVertical:10,  fontSize:20}}>{input}</Text>
                <TouchableOpacity style={{backgroundColor:"lightgray" ,paddingHorizontal:20, paddingVertical:10, borderRadius:100, borderColor:"blue", borderWidth:1}} onPress={()=>{setInput(input+1)}}>
                  <Text style={{fontSize:26, textAlign:"center", fontWeight:780}}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
             
            </View>
          
        </View>
      </View>
      :
      <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center", paddingHorizontal:15}}> 
        <Text style={{fontSize:18, fontWeight:800}}>Size guide</Text>
        <Text style={{padding:8, backgroundColor:"blue", borderRadius:50}} onPress={()=>{setSize(true)}}>
          <AntDesign name="arrowright" size={20} color={"white"}/>
        </Text>
        </View>
    }
   
   </View>
  )
}
