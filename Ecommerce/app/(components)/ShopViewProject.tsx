import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';

export default function ShopViewProject() {
  return (
    <View style={{
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 15,
      // marginTop: 0,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 10,
    }}>
      {
        [{ name: "Dresses" }, { name: "Pants" }, { name: "Skirts" }, { name: "Shorts" },
        { name: "Jackets" }, { name: "Hoodies" }, { name: "Shirts" }, { name: "Plolo" },
        { name: "T-Shirt" }, { name: "Tunics" }].map((e, index) => {
          return (
            <View key={index} style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <TouchableOpacity 
                activeOpacity={0.7} 
                style={{
                  borderWidth: 1,
                  borderColor: 'transparent',
                  borderRadius: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                
                }}>
                <View style={{
                  overflow: 'hidden',
                  borderRadius: 50,
                  elevation: 5,
                }}>
                  <Image 
                    source={{
                      uri: "https://images.unsplash.com/photo-1593696954577-ab3d39317b97?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D"
                    }} 
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: 50,
                      borderWidth: 2,
                      borderColor: '#fff',
                    }} 
                  />
                </View>
                <Text style={{
                  fontSize: 14,
                  textAlign: "center",
                  fontWeight: '600',
                  letterSpacing: 0.5,
                
                  color: "#34495e",
                }}>
                  {e.name}
                </Text>
              </TouchableOpacity>
            </View>
          );
        })
      }
    </View>
  );
}
