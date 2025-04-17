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
    'https://dm0qx8t0i9gc9.cloudfront.net/watermarks/image/rDtN98Qoishumwih/graphicstock-happy-young-woman-holding-many-shopping-bags-on-a-yellow-background_Hw-xl8rnVuW_SB_PM.jpg',
   
    'https://plus.unsplash.com/premium_photo-1683147655175-3677d43108a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hvcHBpbmclMjBnaXJsfGVufDB8fDB8fHww',
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
    width: 300,
    height: 700,
    marginTop:20,
    alignSelf:"center",
   borderRadius:20
    
  },
});

export default Sipper;