import { AntDesign } from '@expo/vector-icons'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Text, View ,Image, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native';
import Loader from './Loader'
import { useRouter } from 'expo-router';
export default function NewItems() {
  let [data,setdata]=useState([]);
  let[load,setLoad]=useState(false);
  let[storeApi,setStoreApi]=useState("");
  let loading=async()=>{
    setLoad(true)
    let api = "https://nexx-js-e-commerce-app-491i.vercel.app/api/product";
    setStoreApi(api)
    try {
      let response=await axios.get(api);
      // console.log(response.data.slice(10, 20));
      setdata(response.data.slice(10, 20))
      setLoad(false);
      
    } catch (error) {
      console.log(error)
      setLoad(true)
    }
  }
// handle the product this is my function open the product detail page
let route=useRouter()
const handleproduct=(id)=>{
  route.push(`/Product_Detail?id=${id}`)
}
// handle the product this is my function open the product detail page


// this is my function open see all page
const seeAlltems=()=>{
  route.push(`/See_All_Item?api=${storeApi} &start=10&end=20`)
}
// this is my function open see all page

  useEffect(()=>{loading()},[])
  return (
    <View style={{  marginTop:0, marginLeft:8, marginRight:5}}>
        <View style={{height:60, flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
          <Text style={{fontSize:22, fontWeight:700}}>New Items</Text>
          <View style={{flexDirection:"row", gap:20, alignItems:"center", justifyContent:"center", paddingRight:20}}>
            <Text style={{fontSize:16, fontWeight:700}}> See All</Text>
            <View style={{ backgroundColor:"blue", padding:10, borderRadius:50 }}>
           <TouchableOpacity onPress={()=>{seeAlltems()}}>
           <AntDesign name="arrowright" size={20} color={"white"}/>
           </TouchableOpacity>
            </View>
          </View>
        </View>
      {
        load?
        <View style={{ height: 60, width: "100%" }}>
            <Loader loading={load} />
          </View>:
        <ScrollView horizontal>
        {
          data.map((item,index)=>{
            const truncatedString = item.name.length > 25 ? item.name.slice(0, 25) + '...' : item.name;
            const galleryImages = item.mainImage.includes('.svg') 
              ? item.mainImage.replace('/upload/', '/upload/f_png/') 
              : item.mainImage;
            return(<TouchableOpacity key={index} onPress={()=>{handleproduct(item._id)}}>
            <View  style={{height:300,  width:200, borderWidth:0.1, marginHorizontal:10, borderRadius:5, overflow:"hidden", padding: 3, elevation:0.5, shadowColor: '#000',
              shadowOpacity: 0.25,
              shadowRadius: 8}}>
        <View  style={{height:200, width:200}}>
          <Image source={{uri:galleryImages}} style={{height:190,width:190, alignSelf:"center", marginRight:6 }} />
        </View>
        <Text style={{height:60, padding:5, paddingHorizontal:10, fontSize:16, fontWeight:500}}>{truncatedString}</Text>
        <Text style={{fontSize:20, fontWeight:800, paddingLeft:10}}>$ {item.price}</Text>
        </View>
        </TouchableOpacity>
          )})
        }
      </ScrollView>
      }
    </View>
  )
}
