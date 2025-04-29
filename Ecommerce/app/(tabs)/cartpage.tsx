
// import Cart from '../components/AddtoCart/Cart'
// import Mostpopular from '../components/Mostpopular'
// import AllItems from '../components/AllItems'
import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import Cart from '../(components)/AddtoCart/Cart';
import Mostpopular from '../(components)/MostPopular';
import NewItems from '../(components)/NewItems';
import AllItems from '../(components)/AllItems';
import { useSelector } from 'react-redux';


const YourScreen = () => {
  const value=useSelector(state=>state.cart.items);
    // console.log(value,"cart page")
  let router=useRouter()
  let gotopayment=()=>{
    router.push("/(components)/AddtoCart/PaymentOption")
  }
  const totals = value.reduce(
    (accumulator, e) => {
      accumulator.total += e.price * e.qty; // Sum total price
      accumulator.quantity += e.qty; // Sum total quantity
      return accumulator; // Return the accumulator for the next iteration
    },
    { total: 0, quantity: 0 } // Initial value for the accumulator
  );

//   console.log(`Total Price: $${totals.total}`); // Output: Total Price: $85
// console.log(`Total Quantity: ${totals.quantity}`);
  // useEffect(()=>{loading()},[])
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
          <Text style={{ fontSize: 20, fontWeight: '800' }}>Total  ₹ {totals.total}</Text>
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
        <Mostpopular/>
        <NewItems/>
        <AllItems/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default YourScreen;
