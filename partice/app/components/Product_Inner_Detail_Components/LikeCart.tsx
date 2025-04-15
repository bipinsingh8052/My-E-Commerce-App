import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function LikeCart() {

  return (
    <ScrollView  showsVerticalScrollIndicator={false}>
   
   {
  [1,1,1,1,1,1,11,11,1,1,1,1,1,1,111,1].map((e,index)=>{return(
      <View  key={index} style={{flexDirection:"row", height:120,  elevation:2, paddingHorizontal:20, alignItems:"flex-end", gap:10, marginTop:10}}>
    <View style={{height:118 ,width:100}}>
      <Image source={{uri:"https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"}} style={{height:118, width:100, borderRadius:10}}/>
      <Text style={{position:"relative", top:-45, left:15, backgroundColor:"white", flexDirection:"row", borderWidth:1, padding:5, borderRadius:50, borderColor:"transparent", alignSelf:"flex-start"}}>
        <AntDesign name="delete" size={20} color={"blue"} />
      </Text>
    </View>
    <View style={{height:"100%", justifyContent:"space-around",  width:"50%"  }}>
      <Text style={{ fontSize:12,fontWeight:400}}>Lorem Ispr trf fhgbh gjhjjhh lorm dg </Text>
      <Text style={{fontSize:14,fontWeight:900}}>$ 17,00</Text>
      <View style={{flexDirection:"row" ,gap:15}}>
        <Text style={{paddingHorizontal:10,paddingVertical:5, backgroundColor:"gray", borderRadius:10, fontWeight:450}}>Pink</Text>
        <Text style={{paddingHorizontal:10,paddingVertical:5, backgroundColor:"gray", borderRadius:10, fontWeight:450}}>M</Text>
      </View>
    </View>
    <View>
      <Text style={{ position:"relative", top:-10}}>
        <Ionicons name="bag-add" size={28} color={"blue"}/>
      </Text>
    </View>
   </View>
    )})
   }
 
   </ScrollView>
  );
}
