import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { Image, ScrollView, Text, View, TouchableOpacity } from 'react-native';

export default function Reviews() {
  return (
    <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
      <View>
        <Text style={{ fontSize: 25, fontWeight: '800' }}>Reviews</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {
          [12, 2, 2, 2, 2, 2, 2, 2, 2, 2].map((e, index) => {
            return (
              <TouchableOpacity 
                key={index} 
                style={{ flexDirection: "row", overflow: "hidden", marginTop: 10, gap: 10, padding: 10, borderRadius: 8, backgroundColor: '#f9f9f9' }} 
                // onPress={() => alert(`Review by Veronika clicked!`)} // Example interaction
              >
                <View style={{ padding: 10, borderRadius: 50 }}>
                  <Image 
                    source={{ uri: "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" }} 
                    style={{ height: 60, width: 60, borderRadius: 50 }} 
                  />
                </View>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                  <Text style={{ fontSize: 15, fontWeight: '700' }}>Veronika</Text>
                  <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5, gap: 5 }}>
                    <Text><AntDesign name='star' size={15} color={"gold"} /></Text>
                    <Text><AntDesign name='star' size={15} color={"gold"} /></Text>
                    <Text><AntDesign name='star' size={15} color={"gold"} /></Text>
                    <Text><AntDesign name='star' size={15} color={"gold"} /></Text>
                    <Text><AntDesign name='star' size={15} color={"gold"} /></Text>
                    <Text style={{ fontFamily: "cursive" }}>4/5</Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 12, fontWeight: 400, overflowX: "hidden", flexWrap: "wrap" }}>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non quasi doloribus delectus eaque consequatur facilis sint, dolorem suscipit facere ex dignissimos fuga quo quae sed nemo, voluptates fugiat, veritatis doloremque?
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })
        }
      </ScrollView>
    </View>
  );
}