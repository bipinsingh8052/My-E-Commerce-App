import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';

export default function AllItems() {
  // const handleItemPress = (index) => {
  //   Alert.alert(`Item ${index + 1} selected!`);
  // };

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
      <ScrollView>
        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 10, justifyContent: "center", alignItems: "center" }}>
          {
            [1, 2, 3, 4, 5, 6, 7, 8,7,8,8,8,8,8].map((e, index) => {
              return (
                <TouchableOpacity 
                  key={index} 
                  // onPress={() => handleItemPress(index)} 
                  style={{
                    height: 250,
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
                  <View style={{ height: 200, width: 150, paddingLeft: 5, paddingTop: 5 }}>
                    <Image 
                      source={{ uri: "https://www.thesun.co.uk/wp-content/uploads/2021/12/MT-SHOPPING-OFF-PLATT.jpg?strip=all&quality=100&w=1200&h=800&crop=1" }} 
                      style={{ height: "96%", width: "96%", borderRadius: 5 }} 
                    />
                  </View>
                  <Text style={{ height: 60, padding: 5, paddingHorizontal: 10, fontSize: 16, fontWeight: '500' }}>
                    Item Description Here
                  </Text>
                  <Text style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 10 }}>$17.00</Text>
                </TouchableOpacity>
              );
            })
          }
        </View>
      </ScrollView>
    </View>
  );
}