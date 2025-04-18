import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';

export default function Discover() {
  

  return (
    <View style={{ marginTop: 0, marginLeft: 10, marginRight: 10 }}>
      <View style={{ height: 60, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Discover</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {
          [1, 2, 3, 4, 5, 6, 7, 8].map((e, index) => {
            return (
              <TouchableOpacity 
                key={index} 
                // onPress={() => handleItemPress(index)} 
                style={{
                  height: 250,
                  width: 200,
                  borderWidth: 0.1,
                  paddingLeft: 3,
                  marginHorizontal: 20,
                  borderRadius: 5,
                  overflow: "hidden",
                  backgroundColor: '#fff',
                  elevation: 2,
                }}
              >
                <View style={{ height: 200, width: 200}}>
                  <Image 
                    source={{ uri: "https://www.thesun.co.uk/wp-content/uploads/2021/12/MT-SHOPPING-OFF-PLATT.jpg?strip=all&quality=100&w=1200&h=800&crop=1" }} 
                    style={{ height: "96%", width: "96%", borderRadius: 5,marginTop:2, marginLeft:1  }} 
                  />
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 10 }}>
                  <Text style={{ textAlign: "center", fontSize: 20, fontWeight: 'bold' }}>
                    1780 <AntDesign name='heart' size={20} color={"blue"} />
                  </Text>
                  <Text style={{ fontSize: 17, fontWeight: '200', marginRight: 10 }}>New</Text>
                </View>
              </TouchableOpacity>
            );
          })
        }
      </ScrollView>
    </View>
  );
}