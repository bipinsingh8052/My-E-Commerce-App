
// import Cart from '../components/AddtoCart/Cart'
// import Mostpopular from '../components/Mostpopular'
// import AllItems from '../components/AllItems'
import React from 'react';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import Cart from '../(components)/AddtoCart/Cart';


const YourScreen = () => {
  let router=useRouter()
  let gotopayment=()=>{
    router.push("/(components)/AddtoCart/PaymentOption")
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      
  
      <View style={{
        position: "absolute",
        // top: 0,
        bottom:0,
        left: 0,
        right: 0,
        zIndex: 10,
        backgroundColor: "#87CEFA",
        elevation: 5,
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      }}>
        <View style={{
          height: 60,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 20
        }}>
          <Text style={{ fontSize: 20, fontWeight: '800' }}>Total $43.00</Text>
          <TouchableOpacity style={{
            backgroundColor: "blue",
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderRadius: 10
          }} onPress={()=>{gotopayment()}}>
            <Text style={{
              color: "white",
              fontWeight: '500',
              fontSize: 14
            }}>Checkout</Text>
          </TouchableOpacity>
        </View>
      </View>

    
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingTop: 0 }} 
      >
        <Cart/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default YourScreen;
