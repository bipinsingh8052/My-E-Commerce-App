import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { Text, View, TouchableOpacity, Alert } from 'react-native';

export default function DiscountHeader() {


  return (
    <View>
      <View style={{
        height: 80,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
      }}>
        <View>
          <Text style={{
            fontSize: 25,
            fontWeight: 'bold',
          }}>Flash Sale</Text>
          <Text style={{
            fontSize: 12,
            fontWeight: '500',
            paddingLeft: 10,
          }}>Choose Your Discount</Text>
        </View>
        <View style={{
          flexDirection: "row",
          alignItems: "center",
        }}>
          <AntDesign name='clockcircleo' size={25} color={"blue"} />
          <View style={{
            flexDirection: "row",
            marginLeft: 5,
          }}>
            <Text style={{
              fontSize: 20,
              padding: 10,
              backgroundColor: "gray",
              borderRadius: 20,
              textAlign: "center",
              color: "white",
              fontWeight: 'bold',
              marginHorizontal: 2,
            }}>00</Text>
            <Text style={{
              fontSize: 20,
              padding: 10,
              backgroundColor: "gray",
              borderRadius: 20,
              textAlign: "center",
              color: "white",
              fontWeight: 'bold',
              marginHorizontal: 2,
            }}>36</Text>
            <Text style={{
              fontSize: 20,
              padding: 10,
              backgroundColor: "gray",
              borderRadius: 20,
              textAlign: "center",
              color: "white",
              fontWeight: 'bold',
              marginHorizontal: 2,
            }}>58</Text>
          </View>
        </View>
      </View>
      <View style={{
        marginTop: 10,
        flexDirection: "row",
        backgroundColor: "gray",
        paddingVertical: 15,
        marginHorizontal: 20,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "space-around",
      }}>
        {['ALL', '10%', '20%', '30%', '40%', '50%'].map((discount) => (
          <TouchableOpacity key={discount} >
            <Text style={{
              fontWeight: 'bold',
              fontSize: 17,
              color: 'white',
            }}>{discount}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}