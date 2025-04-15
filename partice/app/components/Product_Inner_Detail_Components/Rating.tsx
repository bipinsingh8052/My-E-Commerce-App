import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react'
import { Image, ScrollView, Text, TextInput, View } from 'react-native'
import { TouchableOpacity } from 'react-native';
import Reviews from './Reviews';

export default function Rating() {
  let [show,setShow]=useState(true);
return(
  <>
  <View style={{paddingHorizontal:20, marginTop:10}}> 
    <Text style={{fontSize:20, fontWeight:800}}>Rating & Reviews</Text>
    <View style={{flexDirection:"row", alignItems:"center", marginTop:10, gap:5}}>
      <Text><AntDesign name='star' size={20} color={"gold"} /></Text>
      <Text><AntDesign name='star' size={20} color={"gold"} /></Text>
      <Text><AntDesign name='star' size={20} color={"gold"} /></Text>
      <Text><AntDesign name='star' size={20} color={"gold"} /></Text>
      <Text><AntDesign name='star' size={20} color={"gold"} /></Text>
      <Text style={{fontFamily:"cursive"}}>4/5</Text>
    </View>
    <View>
      <View style={{flexDirection:"row", overflow:"hidden", marginTop:20, gap:10}}>
        <View style={{padding:10, borderRadius:50}}>
        <Image source={{uri:"https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"}} style={{height:60, width:60, borderRadius:50}}/>
      </View>
      <View>
        <Text style={{fontSize:15, fontWeight:700}}>Veronika</Text>
      
          <View style={{flexDirection:"row", alignItems:"center", marginTop:5, gap:5}}>
            <Text><AntDesign name='star' size={15} color={"gold"} /></Text>
            <Text><AntDesign name='star' size={15} color={"gold"} /></Text>
            <Text><AntDesign name='star' size={15} color={"gold"} /></Text>
            <Text><AntDesign name='star' size={15} color={"gold"} /></Text>
            <Text><AntDesign name='star' size={15} color={"gold"} /></Text>
            <Text style={{fontFamily:"cursive"}}>4/5</Text>
           </View>
           <View>
            <Text style={{fontSize:12, fontWeight:400, overflowX:"hidden"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non quasi doloribus delectus eaque consequatur facilis sint, dolorem suscipit facere ex dignissimos fuga quo quae sed nemo, voluptates fugiat, veritatis doloremque?</Text>
           </View>
    
      </View>
     
      </View>
      <TouchableOpacity style={{backgroundColor:"blue", marginTop:5, paddingVertical:10, borderRadius:10}} onPress={()=>{setShow(!show)}}>
        <Text style={{textAlign:"center" ,color:"white"}}>{(show)?"View All Reviews":"Hide All Reviews"}</Text>
      </TouchableOpacity>
      </View>
    </View>
    {
      show?<Text></Text>:<Reviews/>
    }


    </>
 
  )
}
