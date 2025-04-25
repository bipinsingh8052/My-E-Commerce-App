import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import Loader from './Loader'
import { useRouter } from 'expo-router';
export default function TopProduct() {
  const[data,setData]=useState([]);
  const[load,setload]=useState(false)
  const [selectedIndex, setSelectedIndex] = useState(false);

  const products = [1, 2, 3, 4, 5, 6, 7];

  const loading=async()=>{
    setload(true)
    let api = "https://nexx-js-e-commerce-app-491i.vercel.app/api/product";

    try {
      let response =await axios.get(api);
      // console.log(response.data.slice(0,10));
      setData(response.data.slice(0.10));
      setload(false)
    } catch (error) {
      console.log(error)
      setload(true);
    }
  }

  // hanlde the click the btn and open it product detail page
  const route=useRouter()
  const handleproduct=(id)=>{
    route.push(`/Product_Detail?id=${id}`)
  }
  // hanlde the click the btn and open it product detail page
  useEffect(()=>{loading()},[])
  return (
    <View style={{ marginTop: 10 }}>
      <Text style={{ paddingLeft: 10, fontSize: 18, fontWeight: '700' }}>
        Top Products
      </Text>

      {
        load? <View style={{height:60, width:"100%"}}>
        <Loader  loading={load}/>
      </View>
        :<ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 10, paddingLeft: 10 }}
      >
        {data.map((item, index) => {
          const galleryImages = item.mainImage.includes('.svg') 
          ? item.mainImage.replace('/upload/', '/upload/f_png/') 
          : item.mainImage;
          return(
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => {setSelectedIndex(true),handleproduct(item._id)}}
            style={{
              marginRight: 15,
              borderRadius: 60,
              padding: 3,
              borderWidth: 2,
              borderColor: selectedIndex? '#ff4081' : '#2196f3',
              backgroundColor: selectedIndex? '#e3f2fd' : '#fff',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 3,
              elevation: 5,
            }}
          >
            <Image
              source={{
                uri:galleryImages ,
              }}
              style={{
                height: 60,
                width: 60,
                borderRadius: 50,
              }}
              onError={() => <View>
                <Loader loading={true} />
                </View>}
            />
          </TouchableOpacity>
        )})}
      </ScrollView>
      }
    </View>
  );
}
