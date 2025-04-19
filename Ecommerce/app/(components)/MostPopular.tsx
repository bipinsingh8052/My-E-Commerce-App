import { AntDesign } from '@expo/vector-icons';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { FlatList } from 'react-native';
import Loader from './Loader'
import { useRouter } from 'expo-router';
export default function Mostpopular() {

  let[data,setdata]=useState([]);
  let[load,setload]=useState(false)
  let route=useRouter();
  let loading=async()=>{
    setload(true)
    let api="https://nexx-js-e-commerce-app-491i.vercel.app/api/product";
    try {
      let response= await axios.get(api)
      console.log(response.data[0])
      setdata(response.data);
      setload(false)
    } catch (error) {
      console.log(error)
      setload(true)
      
    }
  }


  // this is goto product page function in thaknkj
  const GotoProductPage=(id)=>{
    // console.log(id)
    route.push(`/Product_Detail?id=${id}`)
  }
  // this is goto product page function in thaknkj

  useEffect(()=>{loading()},[])

  return (
    <View style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}>
      <View style={{ height: 60, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Most Popular</Text>
        <View style={{ flexDirection: "row", alignItems: "center", paddingRight: 20 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}> See All</Text>
          <View style={{ backgroundColor: "blue", padding: 10, borderRadius: 50, marginLeft: 5 }}>
            <AntDesign name="arrowright" size={20} color={"white"} />
          </View>
        </View>
      </View>
      
        
      
        {
          load?  <View style={{height:60, width:"100%"}}>
          <Loader  loading={load}/>
        </View>:
          <FlatList
          horizontal
         data={data}
         keyExtractor={(item) => item._id} // Adjust based on your data structure
         renderItem={({item}) => 
           <TouchableOpacity 
            onPress={()=>{GotoProductPage(item._id)}}
            style={{ height: 250, width: 200, borderWidth: 0.1, padding: 3, marginHorizontal: 10, borderRadius: 5, overflow: "hidden", backgroundColor: '#fff', elevation: 2 }}>
         <View style={{ height: 200, width: 195 }}>
           <Image source={{ uri:item.mainImage  }} style={{ height: "100%", width: "100%", borderRadius: 5 }} />
         </View>
         <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 10, paddingTop: 5 }}>
           <Text style={{ textAlign: "center", fontSize: 20, fontWeight: 'bold' }}>
             {item.brand}<AntDesign name='heart' size={20} color={"blue"} />
           </Text>
           <Text style={{ fontSize: 17, fontWeight: '200', marginRight: 10 }}>New</Text>
         </View>
       </TouchableOpacity>
         }
       />
        }
     
      {/* </ScrollView> */}
    </View>
  );
}