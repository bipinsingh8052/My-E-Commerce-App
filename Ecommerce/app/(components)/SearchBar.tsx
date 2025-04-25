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
} from 'react-native';
import { TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import Loader from './Loader'
const { width } = Dimensions.get('window');


export default function Shop() {
  let [data,setData]=useState([]);
  let [load,setload]=useState(false)


  let  route=useRouter();
  let loading=async()=>{
    setload(true)
    let api="https://nexx-js-e-commerce-app-491i.vercel.app/api/product";
    try {
      let response=await axios.get(api)
      // console.log(response.data.slice(0, 3))
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
  return (
    
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
            
            marginBottom: 20,
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
                  source={{ uri: item.mainImage }}
                  style={{
                    width: width * 0.9,
                    height: 200,
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
  
  );
}
