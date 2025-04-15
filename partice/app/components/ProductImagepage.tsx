import React, { useState } from 'react';
import { View, Text, Dimensions, StyleSheet, Image, ScrollView } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
const { width } = Dimensions.get('window');

const images = [
  { id: 1, url: 'https://thumbs.dreamstime.com/b/vibrant-peacock-feather-resting-gently-lush-moss-single-brightly-colored-rests-delicately-covered-ground-tranquil-forest-363739804.jpg' },
  { id: 2, url: 'https://thumbs.dreamstime.com/b/vibrant-peacock-feather-resting-gently-lush-moss-single-brightly-colored-rests-delicately-covered-ground-tranquil-forest-363739804.jpg' },
  { id: 3, url: 'https://thumbs.dreamstime.com/b/vibrant-peacock-feather-resting-gently-lush-moss-single-brightly-colored-rests-delicately-covered-ground-tranquil-forest-363739804.jpg' },
];
export default function ProductImagepage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <View style={styles.container}>
    
    <Carousel
        width={width}
        height={520}
        autoPlay="auto"
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
  )
}



const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    alignItems: 'center'
  },
  card: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    alignSelf:"center",
    
    width: width - 5,
    height: 500,
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
