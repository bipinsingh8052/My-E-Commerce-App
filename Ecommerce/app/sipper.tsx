import React from "react";

import { View, Image, StyleSheet, Dimensions,Button ,Text} from 'react-native';
import Swiper from 'react-native-swiper';
import { Link } from 'expo-router';

import { useRouter } from 'expo-router';
import { TouchableOpacity } from "react-native";

        


const { width } = Dimensions.get('window');

const Sipper = () => {
  const router=useRouter();
  let gotonext=()=>{
    router.push("/signup")
  }

  const images = [
    'https://img.freepik.com/free-photo/full-length-portrait-smiling-family_171337-2279.jpg?semt=ais_hybrid&w=740',
      'https://us.123rf.com/450wm/espies/espies2011/espies201100220/158560376-happy-indian-family-festival-shopping-concept-holding-paper-bags-and-showing-debit-or-credit-card.jpg?ver=6',
       'https://assets.ajio.com/medias/sys_master/root/20231016/L6FL/652c5051afa4cf41f5466bdf/-473Wx593H-466711316-blue-MODEL.jpg',
  ];

  return (
    <>
    
    <View style={styles.container}>

      <Swiper autoplay={true} showsPagination={true} dotColor="#ccc" activeDotColor="#000">

       
        {images.map((image, index) => (
          
          <Image
            key={index}
            source={{ uri: image }}
            style={styles.image}
            resizeMode="cover"
            
          />

          
        ))}
          
      </Swiper>
     
         
        <View>
         
      <TouchableOpacity style={{backgroundColor:"red", position:"absolute", bottom:0, height:60, width:"100%", alignItems:"center", justifyContent:"center"}} onPress={gotonext}>
        <Text style={{fontSize:20, fontWeight:700, color:"white" }}>Let's go</Text>
      </TouchableOpacity>
      </View>
     
      </View>
      
      </>
  );
};


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"blue",
    
  },
  image: {
    width: "100%",
    height: "100%",
    marginTop:0,
    alignSelf:"center",
   borderRadius:0
    
  },
});

export default Sipper;