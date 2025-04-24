import React, { useEffect, useState } from 'react';
import { Image, Text, View, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import Loader from './Loader'
import axios from 'axios';
import { useRouter } from 'expo-router';
export default function ShopViewProject() {
  let [data,setData]=useState([]);
  let [load,setLoad]=useState(false)
  let route =useRouter()
  let Loading=async()=>{
    setLoad(true)
    let api = "https://nexx-js-e-commerce-app-491i.vercel.app/api/categories";
    try {
      let res=await axios.get(api)
      // console.log(res.data,"cat");
      setData(res.data)
      setLoad(false)
    } catch (error) {
      setLoad(true)
      
    }
  }



  const gotoCategoriesDetail=(id)=>{
    route.push(`/categories_All?id=${id}`);
  }



  useEffect(()=>{Loading()},[])
  return (
    <View style={{
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 15,
      // marginTop: 0,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 10,
    }}>
      {
        load?
        <View style={{height:60, width:"100%"}}>
        <Loader  loading={load}/>
      </View>
        :<ScrollView horizontal showsHorizontalScrollIndicator={false}>
     
        { data.map((item,index)=>{
           const truncatedString = item.name.length > 5 ? item.name.slice(0, 5) + '...' : item.name;
           const galleryImages = item.imageUrl.includes('.svg') 
            ? item.imageUrl.replace('/upload/', '/upload/f_png/') 
            : item.imageUrl;
          return(
           <View key={index} style={{

            justifyContent: 'center',
            alignItems: 'center',
            marginLeft:5
          }}>
            <TouchableOpacity 
              activeOpacity={0.7} 
              style={{
                borderWidth: 1,
                borderColor: 'transparent',
                borderRadius: 50,
                alignItems: 'center',
                justifyContent: 'center',
              
              }}  onPress={()=>{gotoCategoriesDetail(item._id)}}>
              <View style={{
                overflow: 'hidden',
                borderRadius: 50,
                elevation: 5,
              }}>
                <Image 
                  source={{
                    uri: galleryImages
                  }} 
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 50,
                    borderWidth: 2,
                    borderColor: '#fff',
                  }} 
                />
              </View>
              <Text style={{
                fontSize: 14,
                textAlign: "center",
                fontWeight: '600',
                letterSpacing: 0.5,
              
                color: "#34495e",
              }}>
                {truncatedString}
              </Text>
            </TouchableOpacity>
          </View>
        )})
      }
      </ScrollView>
      }
      
    </View>
  );
}
