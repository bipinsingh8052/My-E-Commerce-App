import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

const categories = [
  { name: 'Clothing', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR132TBAD0-GhGhN8_2Xr-3obkFd4NzFbk6Hg&s' },
  { name: 'Shoes', imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR132TBAD0-GhGhN8_2Xr-3obkFd4NzFbk6Hg&s" },
  { name: 'Bags', imageUrl:  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR132TBAD0-GhGhN8_2Xr-3obkFd4NzFbk6Hg&s"},
  { name: 'Lingerie', imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR132TBAD0-GhGhN8_2Xr-3obkFd4NzFbk6Hg&s"  },
  { name: 'Watches', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR132TBAD0-GhGhN8_2Xr-3obkFd4NzFbk6Hg&s' },
  { name: 'Hoodies', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR132TBAD0-GhGhN8_2Xr-3obkFd4NzFbk6Hg&s' },
];

export default function Categories() {
  const route = useRouter();
  const [activeCategory, setActiveCategory] = useState(false);

  const gotoDetail = () => {
    // route.push("/ProductDetailsAll");
  };

  return (
    <View style={{ height: 300, marginTop: 10, marginLeft: 10, marginRight: 10 }}>
      <View style={{ height: 60, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ fontSize: 22, fontWeight: '700' }}>Categories</Text>
        <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center', justifyContent: 'center', paddingRight: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: '700' }}>See All</Text>
          <View style={{ backgroundColor: 'blue', padding: 10, borderRadius: 50 }}>
            <AntDesign name="arrowright" size={20} color={'white'} />
          </View>
        </View>
      </View>

      <ScrollView horizontal>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {categories.map((category, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {setActiveCategory(true) }}
              style={{
                elevation: 10,
                // borderWidth: 1,
                borderColor:"transprent",
                marginHorizontal: 5,
                borderRadius: 5,
                shadowColor:"#000",
                shadowOpacity:0.25,
                shadowRadius:8,
                overflow: 'hidden',
                marginTop: 5,
                backgroundColor: activeCategory ? '#f0f8ff' : '#fff', // Change background color on click
              }}
            >
              <View style={{ height: 220, width: 170, flexDirection: 'row' }}>
                <View style={{ height: 220, width: 170, flexDirection: 'row', flexWrap: 'wrap', gap: 2, paddingLeft:4, paddingTop:2 }}>
                  <Image
                    source={{ uri: category.imageUrl }}
                    style={{ height: 80, width: 80, borderRadius:5 }}
                  />
                  <Image
                    source={{ uri: category.imageUrl }}
                    style={{ height: 80, width: 80, borderRadius:5 }}
                  />
                  <Image
                    source={{ uri: category.imageUrl }}
                    style={{ height: 80, width: 80, borderRadius:5 }}
                  />
                  <Image
                    source={{ uri: category.imageUrl }}
                    style={{ height: 80, width: 80 , borderRadius:5}}
                  />
                  <View style={{paddingLeft:10, flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                  <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: '700', paddingTop: 10 }}>
                    {category.name}
                  </Text>
                  <Text style={{ fontSize: 17, fontWeight: '200', marginRight: 10, paddingTop: 10, paddingLeft: 30 }}>
                    New
                  </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
