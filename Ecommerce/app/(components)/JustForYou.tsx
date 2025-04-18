import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { Text, View, Image, TouchableOpacity, Alert } from 'react-native';

export default function JustForYou() {
  const handleItemPress = (itemIndex) => {
    Alert.alert(`Item ${itemIndex + 1} pressed!`);
  };

  return (
    <View style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}>
      <View style={{ height: 60, flexDirection: "row", alignItems: "center", gap: 5 }}>
        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Just For You</Text>
        <AntDesign size={20} color={"blue"} name='star' />
      </View>
      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 5 }}>
        {
          [1, 2, 3, 4].map((e, index) => {
            return (
              <TouchableOpacity 
                key={index} 
                onPress={() => handleItemPress(index)} 
                style={{
                  height: 200,
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
                <View style={{ height: 150, width: 140,justifyContent:"center" }}>
                  <Image 
                    source={{ uri: "https://www.thesun.co.uk/wp-content/uploads/2021/12/MT-SHOPPING-OFF-PLATT.jpg?strip=all&quality=100&w=1200&h=800&crop=1" }} 
                    style={{ height: "96%", width: "100%", borderRadius: 5,  marginLeft:5}} 
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
    </View>
  );
}