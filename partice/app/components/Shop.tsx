import { AntDesign } from '@expo/vector-icons'
import React, { useState } from 'react'
import { Text, View ,Image, ScrollView, StyleSheet,TextInput, Dimensions } from 'react-native'
import Carousel from 'react-native-reanimated-carousel';

const { width } = Dimensions.get('window');

const images = [
  { id: 1, url: 'https://thumbs.dreamstime.com/b/vibrant-peacock-feather-resting-gently-lush-moss-single-brightly-colored-rests-delicately-covered-ground-tranquil-forest-363739804.jpg' },
  { id: 2, url: 'https://thumbs.dreamstime.com/b/vibrant-peacock-feather-resting-gently-lush-moss-single-brightly-colored-rests-delicately-covered-ground-tranquil-forest-363739804.jpg' },
  { id: 3, url: 'https://thumbs.dreamstime.com/b/vibrant-peacock-feather-resting-gently-lush-moss-single-brightly-colored-rests-delicately-covered-ground-tranquil-forest-363739804.jpg' },
];

export default function Shop() {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
       <View style={{marginTop:20}}>
         <View style={{ flexDirection:"row", justifyContent:"space-between",  alignItems:"center"}}>
          <Text style={{fontSize:35, fontWeight:800, marginLeft:10}}>Shop</Text>
         <View style={{flexDirection:"row", width:250,borderWidth:0.5, borderRadius:20, marginRight:10,height:30, justifyContent:"space-between", alignItems:"center"}}>
         <TextInput placeholder='Search' style={{width:"80%", paddingLeft:10, paddingTop:1, marginTop:10,  height:30, borderStyle:"none"}}/>
         <View style={{paddingRight:10 }}>
         <AntDesign size={20} color={"blue"} name='camerao'  />
         </View>
         </View>
         </View>
         <View style={styles.container}>
      <Carousel
        width={width}
        height={220}
        autoPlay
        data={images}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => setCurrentIndex(index)}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.url }} style={styles.image} />
          </View>
        )}
      />
    <View style={styles.pagination}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              currentIndex === index ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>
         </View>
         </View>
        
  )
}



const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    alignItems: 'center'
  },
  card: {
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent:"center",
    alignItems:"center"
  },
  image: {
    width: width - 40,
    height: 200,
    borderRadius: 12,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
  dot: {
    marginHorizontal: 4,
    borderRadius: 5,
  },
  activeDot: {
    width: 16,
    height: 8,
    backgroundColor: '#2e86de',
  },
  inactiveDot: {
    width: 8,
    height: 8,
    backgroundColor: '#dcdde1',
  },
})