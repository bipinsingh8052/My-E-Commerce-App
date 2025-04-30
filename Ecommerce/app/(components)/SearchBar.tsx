import { AntDesign } from '@expo/vector-icons';
import axios from 'axios';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
  ScrollView,
} from 'react-native';
import { TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import Loader from './Loader'
const { width } = Dimensions.get('window');


export default function Shop() {
  let [data,setData]=useState([]);
  let[allData,setAllData]=useState([]);
  let[showSearch,setShowSearch]=useState([]);
  let [load,setload]=useState(false)
  let[search,setSearch]=useState("")


  let  route=useRouter();
  let loading=async()=>{
    setload(true)
    let api="https://nexx-js-e-commerce-app-491i.vercel.app/api/product";
    try {
      let response=await axios.get(api)
      // console.log(response.data.slice(0, 3))
      setAllData(response.data);
      setData(response.data.slice(0, 3))
      setload(false)
    } catch (error) {
      setload(true)
    }
  }

  
  // got to next page in product detail page 
  const gotoProductDetailPage=(id)=>{
    route.push(`/Product_Detail?id=${id}`)
  }
  // got to next page in product detail page 
  useEffect(()=>{loading()},[])
  useEffect(()=>{
   
    const filteredData = allData.filter((item) => {
      // Check if the input is a number
      const isPriceInput = !isNaN(search) && search.trim() !== '';
      
      
      if (isPriceInput) {
        const matchesName = item.price<=search;
        return matchesName; // Show all products
      }
    
      // Otherwise, filter by name
     if(!isPriceInput){
      const matchesName = item.name.toLowerCase().includes(search.toLowerCase());
      return matchesName; 
     }
    });
    // console.log(filteredData,"filterdata")
      setShowSearch(
        filteredData
  
      )

  },[search])
 
  return ( <>
    
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(251, 222, 222, 0.4)',
          padding: 10,
        }}
      >
   
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 5,
            
            marginBottom: 5,
          }}
        >
          <Text
            style={{
              fontSize: 32,
              fontWeight: '900',
              color:"black",
            }}
          >
            Shop
          </Text>

          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#fff',
              width: 220,
              height: 40,
              borderRadius: 20,
              alignItems: 'center',
              paddingHorizontal: 10,
              elevation: 3,
            }}
          >
            <TextInput
              placeholder="Search"
              placeholderTextColor="#666"
              style={{
                flex: 1,
                paddingLeft: 10,
                fontSize: 14,
              }}
              onChangeText={(e)=>{setSearch(e)}}
            />
            <AntDesign size={20} color={'#2e86de'} name="camerao" />
          </View>
        </View>

    
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            paddingBottom: 20,
          }}
        >
          <Swiper
            autoplay
            showsPagination
            autoplayTimeout={3}
            dotColor="#ccc"
            activeDotColor="#00a8ff"
            style={{ height: 220 }}
            dotStyle={{ width: 8, height: 8, borderRadius: 4 }}
            activeDotStyle={{ width: 16, height: 8, borderRadius: 4 }}
          >
            { load?
             <View style={{height:60, width:"100%"}}>
             <Loader  loading={load}/>
           </View>
            :  data.map((item) => (
              <View
                key={item._id}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <TouchableOpacity onPress={()=>{gotoProductDetailPage(item._id)}}>
                <Image
                  source={{ uri: item?.mainImage }}
                  style={{
                    width: width * 0.9,
                    height: 210,
                    borderRadius: 15,
                    borderWidth: 2,
                    borderColor: '#fff',
                  }}
                  resizeMode="cover"
                />
                </TouchableOpacity>
              </View>
            ))}
          </Swiper>
        </View>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginBottom:10}}>
              {
                showSearch.map((item,index)=>{
                  const truncatedString = item?.name.length > 15 ? item?.name.slice(0, 15) + '...' : item.name;
                  const galleryImages = item?.mainImage.includes('.svg') 
                    ? item?.mainImage.replace('/upload/', '/upload/f_png/') 
                    : item?.mainImage;
                  return(<TouchableOpacity key={index} onPress={()=>{gotoProductDetailPage(item._id)}}>
                  <View  style={{  width:200, borderWidth:0.1,  borderRadius:5, overflow:"hidden", padding: 3, elevation:0.5, shadowColor: '#000',
                    shadowOpacity: 0.25,
                    shadowRadius: 8}}>
              <View  style={{height:200, width:200}}>
                <Image source={{uri:galleryImages}} style={{height:200,width:190, alignSelf:"center", marginRight:6 }} />
              </View>
              <Text style={{ padding:5, paddingHorizontal:10, fontSize:16, fontWeight:500, color:"gray"}}>{truncatedString}</Text>
              <Text style={{fontSize:18, fontWeight:400, paddingLeft:10}}> ₹ {item.price}</Text>
              </View>
              </TouchableOpacity>
                )})
              }
            </ScrollView>
     </>
  
  );
}
