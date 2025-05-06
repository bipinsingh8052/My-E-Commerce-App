import { AntDesign } from '@expo/vector-icons';
import axios from 'axios';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Text, View, Image, TouchableOpacity, Alert, ScrollView, SafeAreaView } from 'react-native';
import Loader from "./Loader"
export default function See_All() {
  let [data,setData]=useState([]);
  let[load,setload]=useState(false)
   let{api}=useLocalSearchParams();
   console.log(api)
  let loading=async()=>{
    setload(true)
    try {
      let response=await axios.get(api);
      console.log(response.data,"see all");
      setData(response.data)
      setload(false)
    } catch (error) {
      console.log(error)
      setload(true)
    }
  } 


let route=useRouter()
  const handleItemPress=(id:any)=>{
    route.push(`/categories_All?id=${id}`);
  }
  useEffect(()=>{loading()},[])
  return (
    <SafeAreaView>
    <ScrollView >
      <View style={{flex:1}}>
   
    {
      load ? 
      // <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
         <View style={{height:500, width:"100%", alignItems:"center", justifyContent:"center" }}>
          <Loader  loading={load}/>
         </View>
        
        //  </View>
      :
      <View style={{ marginTop: 10, marginLeft: 10, marginRight: 10,  }}>
      <View style={{ height: 60, flexDirection: "row", alignItems: "center", gap: 5 }}>
        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>All Categories</Text>
        <AntDesign size={20} color={"blue"} name='star' />
      </View>
     
      <View  style={{ flexDirection: "row", flexWrap: "wrap", gap: 5,  width:"100%"}}>
        {
          data.map((e, index) => {
            const galleryImages = e.imageUrl.includes('.svg') 
            ? e.imageUrl.replace('/upload/', '/upload/f_png/') 
            : e.imageUrl;
            return (
              <TouchableOpacity 
                key={index} 
                onPress={() => handleItemPress(e._id)} 
                style={{
                  // height: 200,
                  width: 150,
                  marginHorizontal: 6,
                  marginVertical: 6,
                  borderWidth: 0.1,
                  borderRadius: 5,
                  overflow: "hidden",
                  backgroundColor: '#fff',
                  elevation: 2,
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.3,
                  shadowRadius: 4,
                }}
              >
                <View style={{  width: 140,justifyContent:"center",  flexWrap:"wrap"}}>
                  <Image 
                    source={{ uri: galleryImages }} 
                    style={{ height: 150, width: "100%", borderRadius: 5,  marginLeft:5}} 
                  />
                </View>
                <Text style={{  padding: 5, paddingHorizontal: 10, fontSize: 16, fontWeight: '400' }}>
                  {e.name}
                </Text>
              </TouchableOpacity>
            );
          })
        }
      </View>
      </View>
    
    }
   </View>
    </ScrollView>
    </SafeAreaView>
  )
}
