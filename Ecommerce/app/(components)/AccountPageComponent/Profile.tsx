import { AntDesign, MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { View,Text, Image, TouchableOpacity, ScrollView } from 'react-native'

export default function Profile() {
  return (
   <View>
    <View style={{height:80, flexDirection:"row", gap:20, justifyContent:"center", alignItems:"center"}}> 
      <View style={{ height:40, width:40, elevation:10, justifyContent:"flex-start"}}>
        <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ79cUcZrJ5loJxsDgX0CCdPe58pOqM7HgXyQ&s"}} style={{ width:50,height:50,borderRadius:50}}/>
      </View>
      
        <TouchableOpacity style={{backgroundColor:"blue", marginLeft:20, height:40, borderRadius:20, justifyContent:"center",  paddingLeft:15, paddingRight:15}}>
          <Text style={{fontSize:10, textAlign:"center", color:"white"}}> My Activity</Text>
        </TouchableOpacity>
       <View style={{alignItems:"center",   width:"30%", flexDirection:"row", justifyContent:"flex-end", gap:10}}>
        <View style={{padding:10, backgroundColor:"#4e9fe5", borderRadius:50, justifyContent:"center"}}>
        <MaterialIcons name="qr-code-scanner" size={15} color={"white"} />
        </View>
        <View style={{padding:10, backgroundColor:"#4e9fe5", borderRadius:50, justifyContent:"center"}}>
        <AntDesign name='barschart' size={15} color={"white"}/>
        </View>
        <View style={{padding:10, backgroundColor:"#4e9fe5", borderRadius:50, justifyContent:"center"}}>
        <AntDesign name="setting" size={15} color={"black"}/>
        </View>
       </View>
    </View>
    <View style={{paddingLeft:20, marginTop:8}}>
      <Text style={{fontSize:18, fontWeight:800}}>Hello , Bipin!</Text>
    </View>
    <View style={{height:60, borderWidth:1, borderColor:"#02ccfe", elevation:5, borderRadius:20, margin:5, backgroundColor:"#87CEEb", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
      <Text style={{height:"100%", width:"80%", paddingVertical:10}}>
        <Text>Announcement</Text>
        <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi eveniet itaque, enim re</Text>
      </Text>
     <View style={{backgroundColor:"blue", padding:10, borderRadius:20 }}>
     <AntDesign name='arrowright' size={20} color={"white"}/>
     </View>
    </View>
    <View>
      <Text style={{marginTop:10, paddingLeft:10, fontSize:18, fontWeight:700}}> Recently viewed</Text>
    <ScrollView horizontal style={{marginTop:10, paddingLeft:15}}>
      {
        [1,2,3,4,5,6,7].map((e,index)=>{return(
          <Image key={index} source={{uri:"https://www.thesun.co.uk/wp-content/uploads/2021/12/MT-SHOPPING-OFF-PLATT.jpg?strip=all&quality=100&w=1200&h=800&crop=1"}} style={{height:60, width:60, borderRadius:50, marginLeft:15, borderColor:"blue", borderWidth:1}}/>
        )})
      }
    </ScrollView>
    </View>

    <View style={{marginTop:20}}>
      <Text style={{fontSize:16, fontWeight:700, paddingLeft:10}}> My Orders</Text>
      <View style={{width:"100%", flexDirection:"row", justifyContent:"space-around", marginTop:15}}>
        <Text style={{paddingHorizontal:20, backgroundColor:"yellow", paddingVertical:8, borderRadius:20}}> To Pay</Text>
        <Text style={{paddingHorizontal:20, backgroundColor:"yellow", paddingVertical:8, borderRadius:20}}> To Recieve</Text>
        <Text style={{paddingHorizontal:20, backgroundColor:"yellow", paddingVertical:8, borderRadius:20}}> To Review</Text>
      </View>
    </View>
   </View>
  )
}
