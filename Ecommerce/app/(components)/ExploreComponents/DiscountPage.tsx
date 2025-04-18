import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';

export default function DiscountPage() {
 
  return (
    <View style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}>
      <View style={{ height: 60, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>20% Discount</Text>
        <View style={{ justifyContent: "flex-end" }}>
          <AntDesign size={25} color={"brown"} name="barchart" />
        </View>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: "row", marginTop: 10 }}>
        {
          [1, 2, 3, 4].map((e, index) => {
            return (
              <TouchableOpacity 
                key={index} 
                
                style={{
                  height: 300,
                  width: 180,
                  marginHorizontal: 6,
                  marginVertical: 6,
                  borderWidth: 0.1,
                  borderRadius: 5,
                  overflow: "hidden",
                  backgroundColor: '#fff',
                  elevation: 2,
                }}
              >
                <View style={{ height: 200, width: 180 }}>
                  <Image 
                    source={{ uri: "https://www.thesun.co.uk/wp-content/uploads/2021/12/MT-SHOPPING-OFF-PLATT.jpg?strip=all&quality=100&w=1200&h=800&crop=1" }} 
                    style={{ height: "96%", width: "96%", borderRadius: 5,  marginLeft:3}} 
                  />
                  <Text style={{
                    position: "absolute",
                    top: 0,
                    right:0,
                    borderBottomLeftRadius:50,

                    // left: 10,
                    backgroundColor: "red",
                    padding: 8,
                    paddingLeft:10,
                    borderRadius: 5,
                    color: "white",
                    fontSize: 13,
                  }}>20%</Text>
                </View>
                <Text style={{
                  height: 50,
                  padding: 5,
                  paddingHorizontal: 10,
                  fontSize: 16,
                  fontWeight: '500',
                }}>Item Description Here</Text>
                <Text style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  paddingLeft: 10,
                }}>$17.00</Text>
              </TouchableOpacity>
            );
          })
        }
      </ScrollView>
    </View>
  );
}