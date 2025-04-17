import { AntDesign, Entypo } from '@expo/vector-icons'
import React from 'react'
import { Text, View ,Image, ScrollView } from 'react-native'


export default function FlashSale() {
 
  return (
    <View style={{marginBottom:5,  marginTop:10, marginLeft:10, marginRight:10}}>
        <View style={{height:60, flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
          <Text style={{fontSize:22, fontWeight:700}}>Flash Sale</Text>
          <View style={{flexDirection:"row", gap:20, alignItems:"center", justifyContent:"center", paddingRight:20}}>
            <Text style={{fontSize:16, fontWeight:700}}> <Entypo size={20} color={"blue"} name='clock' /></Text>
            <View  style={{ flexDirection:"row", gap:10}}>
            <Text style={{backgroundColor:"gray", padding:5, borderRadius:10, fontWeight:800}}>00</Text>
            <Text style={{backgroundColor:"gray", padding:5, borderRadius:10, fontWeight:800}}>36</Text>
            <Text style={{backgroundColor:"gray", padding:5, borderRadius:10, fontWeight:800}}>58</Text>
            </View>
          </View>
        </View>
        <View>
          <View style={{flexDirection:"row", flexWrap:"wrap", gap:10, paddingHorizontal:5}}>
            <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa4TbIwZyapkC_MJX3SEVgkaNfYZzOGLPtkA&s"}} style={{width:100, height:100, borderRadius:10}} />
            <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa4TbIwZyapkC_MJX3SEVgkaNfYZzOGLPtkA&s"}} style={{width:100, height:100, borderRadius:10}} />
            <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa4TbIwZyapkC_MJX3SEVgkaNfYZzOGLPtkA&s"}} style={{width:100, height:100, borderRadius:10}} />
            <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa4TbIwZyapkC_MJX3SEVgkaNfYZzOGLPtkA&s"}} style={{width:100, height:100, borderRadius:10}} />
            <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa4TbIwZyapkC_MJX3SEVgkaNfYZzOGLPtkA&s"}} style={{width:100, height:100, borderRadius:10}} />
            <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa4TbIwZyapkC_MJX3SEVgkaNfYZzOGLPtkA&s"}} style={{width:100, height:100, borderRadius:10}} />
            <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa4TbIwZyapkC_MJX3SEVgkaNfYZzOGLPtkA&s"}} style={{width:100, height:100, borderRadius:10}} />
            <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa4TbIwZyapkC_MJX3SEVgkaNfYZzOGLPtkA&s"}} style={{width:100, height:100, borderRadius:10}} />
            <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa4TbIwZyapkC_MJX3SEVgkaNfYZzOGLPtkA&s"}} style={{width:100, height:100, borderRadius:10}} />
          </View>
        </View>
         
    </View>
  )
}
