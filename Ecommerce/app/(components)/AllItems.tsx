import { AntDesign } from '@expo/vector-icons';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { FlatList } from 'react-native';
import Loader from './Loader'
import { useRouter } from 'expo-router';
export default function AllItems() {
  let[loader,setloader]=useState(false)
   let[data,setdata]=useState([]);
  
  
    let loading=async()=>{
      setloader(true)
      let api="https://nexx-js-e-commerce-app-491i.vercel.app/api/product";
      try {
        let response= await axios.get(api)
        // console.log(response.data[0])
              setloader(false)

        setdata(response.data);
      } catch (error) {
        console.log(error)
        setloader(true)
        
      }
    }


    // got to next page in produt detail page
    const route=useRouter();
    const handleItemPress=(id)=>{
      route.push(`/Product_Detail?id=${id}`)
    }
    // got to next page in produt detail page
  
    useEffect(()=>{loading()},[])

  return (
    <View style={{ marginTop: 0, marginLeft: 10, marginRight: 10 }}>
      <View style={{ height: 60, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>ALL Items</Text>
        <View style={{ flexDirection: "row", gap: 20, alignItems: "center", justifyContent: "center", paddingRight: 20 }}>
          <View style={{ backgroundColor: "blue", padding: 10, borderRadius: 50 }}>
            <AntDesign name="barchart" size={20} color={"white"} />
          </View>
        </View>
      </View>
      <ScrollView style={{marginBottom:10}} showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 10, justifyContent: "center", alignItems: "center" }}>
         {
          loader? <View style={{height:60, width:"100%"}}>
            <Loader  loading={loader}/>
          </View>:
          
          <FlatList
              data={data}
              horizontal
              renderItem={({item}) =>{
                const truncatedString = item.name.length > 15 ? item.name.slice(0, 15) + '...' : item.name; 
                return(

                <TouchableOpacity 
              onPress={() => handleItemPress(item._id)} 
              style={{
                // height: 270,
                width: 150,
                borderWidth: 0.1,
                alignItems: "center",
                borderRadius: 5,
                overflow: "hidden",
                backgroundColor: '#fff',
                elevation: 2,
                margin: 5,
              }}
            >
              <View style={{ height: 180, width: 150, paddingLeft: 5, paddingTop: 5,}}>
                <Image 
                  source={{ uri: item.mainImage }} 
                  style={{ height: "96%", width: "96%", borderRadius: 5 }} 
                />
              </View>
              <Text style={{  padding: 3, paddingHorizontal: 10, fontSize: 16, fontWeight: '500', alignSelf:"flex-start", paddingLeft:10, color:"gray" }}>
             {truncatedString}
              </Text>
              <Text style={{ fontSize: 20, fontWeight: '350', paddingLeft: 10,  alignSelf:"flex-start"}}> ₹ {item.price}</Text>
            </TouchableOpacity>
              )}
              }
        />
         }
        </View>
      </ScrollView>
    </View>
  );
}