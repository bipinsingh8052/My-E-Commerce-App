import { useRouter } from "expo-router";
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";

import { AntDesign, FontAwesome } from "@expo/vector-icons";
import ProductImagepage from "../ProductImagepage";

export default function ProjectDetail() {
  
  return (
    <SafeAreaView>
       <ScrollView>
      
   <ProductImagepage/>

   <View>
    <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center", marginTop:10, paddingHorizontal:25}}> 
      <Text style={{fontFamily:"cursive", fontSize:25, fontWeight:800}}>$ 17,00</Text>
      <Text style={{padding:10, borderRadius:50, backgroundColor:"lightgray"}}>
        <FontAwesome name="share" size={20} color={"gray"}/>
      </Text>
    </View>
    <View style={{paddingHorizontal:30, marginTop:30}}>
      <Text style={{fontSize:17, fontWeight:400}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut officiis itaque accusamus non dolore rem quae, quaerat nostrum reiciendis natus sint ad optio eum eveniet modi possimus nihil quidem impedit.</Text>
    </View>
    <View style={{flexDirection:"row", paddingHorizontal:20, marginTop:30, justifyContent:"space-between", alignItems:"center"}}>
      <View style={{flexDirection:"row", gap:20, alignItems:"center", justifyContent:"center"}}>
      <Text style={{fontSize:20, fontWeight:800}}>Variations</Text>
      <Text style={{padding:5, backgroundColor:"lightgray", borderRadius:5}}>Pink</Text>
      <Text style={{padding:5, backgroundColor:"lightgray", borderRadius:5}}>M</Text>
      </View>
      <View style={{padding:8, backgroundColor:"blue", borderRadius:50, marginBottom:5}}>
       <Text> <AntDesign name="arrowright" size={24} color={"white"}/></Text>
      </View>
     
    </View>
    <View style={{paddingHorizontal:20, marginTop:20}}>
    <ScrollView horizontal >
      {
        [1,2,3,3].map((e,index)=>{return(
          <Image key={index} source={{uri:"https://media.istockphoto.com/id/136881877/photo/mountain-lake-with-dock-and-stars.jpg?s=612x612&w=0&k=20&c=hwMVAc4R5UGAOrQoZiXV4MYjuXodHWElPJp_ogCZySw="}} style={{height:100,width:80, borderRadius:5, marginLeft:10}} resizeMode="cover" />
        )})
      }
      </ScrollView>
    </View>
   </View>
      </ScrollView>
       </SafeAreaView>
   
  );
}
