import React, { useState } from 'react'
import { ScrollView, View ,Text} from 'react-native'
import ProjectDetail from './components/Product_Inner_Detail_Components/ProjectDetail'
import Delivery from './components/Product_Inner_Detail_Components/Delivery'
import Specifications from './components/Product_Inner_Detail_Components/Specifications'
import Quantity from './components/Product_Inner_Detail_Components/Quantity'
import Rating from './components/Product_Inner_Detail_Components/Rating'
import Mostpopular from './components/Mostpopular'
import JustForYou from './components/JustForYou'
import { AntDesign } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'

export default function ProductDetailsAll() {
    let[Like,setLike] =useState(false);
  return (
    <View style={{flex:1}}>
        <View style={{position:"absolute", bottom:30, backgroundColor:"lightgray", width:"100%", zIndex:3, height:80 ,alignSelf:'flex-end', flexDirection:"row", justifyContent:"space-around",alignItems:"center"}}>
            <Text style={{marginBottom:20}} onPress={()=>{setLike(!Like)}}>
                {
                    (Like)?<AntDesign name='heart' size={25} color={"red"}/>:
                    <AntDesign name='hearto' size={25} color={"red"}/>
                }
            </Text>
            <TouchableOpacity>
            <Text style={{paddingHorizontal:20, paddingVertical:10, backgroundColor:"black" ,color:"white", marginBottom:20, borderRadius:10}}>
                Add to Cart
            </Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={{paddingHorizontal:20, paddingVertical:10, backgroundColor:"blue", color:"white", marginBottom:20, borderRadius:10}}>Buy Now</Text>
            </TouchableOpacity>
         </View>
   <ScrollView>
    <ProjectDetail/>
    <Delivery/>
    <Specifications/>
    <Quantity/>
    <Rating/>
    <Mostpopular/>
    <JustForYou/>
   </ScrollView>
   
   </View>
  )
}
