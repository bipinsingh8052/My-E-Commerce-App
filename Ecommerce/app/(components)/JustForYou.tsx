import { AntDesign } from '@expo/vector-icons';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Text, View, Image, TouchableOpacity, Alert, FlatList } from 'react-native';
import Loader from './Loader';
import { useRouter } from 'expo-router';

export default function JustForYou() {
  let [data, setData] = useState([]);
  let [load, setLoad] = useState(false);
  let route=useRouter()

  const handleItemPress = (id) => {
    route.push(`/Product_Detail?id=${id}`)
  };

  const loading = async () => {
    let api = "https://nexx-js-e-commerce-app-491i.vercel.app/api/product";
    setLoad(true);
    try {
      let response = await axios.get(api);
      // console.log(response.data.slice(5, 10));
      setData(response.data.slice(5, 15));
      setLoad(false);
    } catch (error) {
      setLoad(false);
      console.error(error);
    }
  };

  useEffect(() => { loading() }, []);

  return (
    <View style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}>
      <View style={{ height: 60, flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Just For You</Text>
        <AntDesign size={20} color={"blue"} name='star' />
      </View>
      {
        load ? (
          <View style={{ height: 60, width: "100%" }}>
            <Loader loading={load} />
          </View>
        ) : (
          <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent:"center", alignItems:"center" }}>
            {
              data.map((item, index) => {
                const truncatedString = item.name.length > 25 ? item.name.slice(0, 25) + '...' : item.name;
                const galleryImages = item.mainImage.includes('.svg') 
                  ? item.mainImage.replace('/upload/', '/upload/f_png/') 
                  : item.mainImage;

                return (
                  <TouchableOpacity 
                    key={index}
                    onPress={() => handleItemPress(item._id)} 
                    style={{
                      height: 250,
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
                    <View style={{ height: 150, width: 140, justifyContent: "center" }}>
                      <Image 
                        source={{ uri: galleryImages }} 
                        style={{ height: "96%", width: "100%", borderRadius: 5, marginLeft: 5 }} 
                      />
                    </View>
                    <Text style={{ padding: 5, paddingHorizontal: 10, fontSize: 16, fontWeight: '500' }}>
                      {truncatedString}
                    </Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 10 }}> ₹ {item.price}</Text>
                  </TouchableOpacity>
                );
              })
            }
          </View>
        )
      }
    </View>
  );
}