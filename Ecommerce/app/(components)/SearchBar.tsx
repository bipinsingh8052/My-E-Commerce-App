import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
} from 'react-native';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');

const images = [
  {
    id: 1,
    url: 'https://thumbs.dreamstime.com/b/vibrant-peacock-feather-resting-gently-lush-moss-single-brightly-colored-rests-delicately-covered-ground-tranquil-forest-363739804.jpg',
  },
  {
    id: 2,
    url: 'https://thumbs.dreamstime.com/b/vibrant-peacock-feather-resting-gently-lush-moss-single-brightly-colored-rests-delicately-covered-ground-tranquil-forest-363739804.jpg',
  },
  {
    id: 3,
    url: 'https://thumbs.dreamstime.com/b/vibrant-peacock-feather-resting-gently-lush-moss-single-brightly-colored-rests-delicately-covered-ground-tranquil-forest-363739804.jpg',
  },
];

export default function Shop() {
  return (
    
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(251, 222, 222, 0.4)',
          padding: 10,
        }}
      >
   
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 5,
            
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              fontSize: 32,
              fontWeight: '900',
              color:"black",
            }}
          >
            Shop
          </Text>

          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#fff',
              width: 220,
              height: 40,
              borderRadius: 20,
              alignItems: 'center',
              paddingHorizontal: 10,
              elevation: 3,
            }}
          >
            <TextInput
              placeholder="Search"
              placeholderTextColor="#666"
              style={{
                flex: 1,
                paddingLeft: 10,
                fontSize: 14,
              }}
            />
            <AntDesign size={20} color={'#2e86de'} name="camerao" />
          </View>
        </View>

    
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            paddingBottom: 20,
          }}
        >
          <Swiper
            autoplay
            showsPagination
            autoplayTimeout={3}
            dotColor="#ccc"
            activeDotColor="#00a8ff"
            style={{ height: 220 }}
            dotStyle={{ width: 8, height: 8, borderRadius: 4 }}
            activeDotStyle={{ width: 16, height: 8, borderRadius: 4 }}
          >
            {images.map((item) => (
              <View
                key={item.id}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Image
                  source={{ uri: item.url }}
                  style={{
                    width: width * 0.9,
                    height: 200,
                    borderRadius: 15,
                    borderWidth: 2,
                    borderColor: '#fff',
                  }}
                  resizeMode="cover"
                />
              </View>
            ))}
          </Swiper>
        </View>
      </View>
  
  );
}
