import React, { useEffect, useState } from 'react'
import { ScrollView, View ,Text, Alert, FlatList} from 'react-native'
import { AntDesign, FontAwesome } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import Mostpopular from './(components)/MostPopular';
import JustForYou from './(components)/JustForYou';
import {  Dimensions, StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import Reviews from './(components)/Product_Details_All/Review';
import { router, useLocalSearchParams } from 'expo-router';
import axios from 'axios';
import { useRouter, useSearchParams } from 'expo-router/build/hooks';
import { Share } from 'react-native';
import Loader from './(components)/Loader'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './redux/slice/cart';
import { AppDispatch } from './redux/store';
const { width } = Dimensions.get('window');
import Toast from 'react-native-toast-message';
import { addWishList } from './redux/slice/wish';




// const images = [
//   { id: 1, url: 'https://thumbs.dreamstime.com/b/vibrant-peacock-feather-resting-gently-lush-moss-single-brightly-colored-rests-delicately-covered-ground-tranquil-forest-363739804.jpg' },
//   { id: 2, url: 'https://thumbs.dreamstime.com/b/vibrant-peacock-feather-resting-gently-lush-moss-single-brightly-colored-rests-delicately-covered-ground-tranquil-forest-363739804.jpg' },
//   { id: 3, url: 'https://thumbs.dreamstime.com/b/vibrant-peacock-feather-resting-gently-lush-moss-single-brightly-colored-rests-delicately-covered-ground-tranquil-forest-363739804.jpg' },
// ];
export default function Product_Detail() {
  
    let[Like,setLike] =useState(false);
    const [show, setShow] = useState(true);
    // select the size of size in that 
    const [size, setSize] = useState(false);
    const [storeSize,setStoreSize]=useState([]);
    const[storeColor,setStoreColor]=useState([]);
    const[storeTags,setStoreTags]=useState([])
    const [input, setInput] = useState(1);
    // store all images in thiat useState
    const[images,setImages]=useState([])
    const [idProduct,setIdProduct]=useState("");
    const [selectedOption, setSelectedOption] = useState(null);
    let[data,setData]=useState({})
    // loader
    let [load,setLoad]=useState(false)
    let{id}=useLocalSearchParams();
    let route:any=useRouter();
    // setIdProduct(id);


    // dispatvh
    let dispatch: AppDispatch=useDispatch();
    let value:any=useSelector(state=>state.wish.items);
    const onShare = async (k:any) => {
      try {
        const result = await Share.share({
          message:
            k
        });
        if (result.action === Share.sharedAction) {
          if (result.activityType) {
            // shared with activity type of result.activityType
          } else {
            // shared
          }
        } else if (result.action === Share.dismissedAction) {
          // dismissed
        }
      } catch (error: any) {
        Alert.alert(error.message);
      }
    };
    // Share the code 
   

// buy single Product
const BuySingleProduct=()=>{
  route.push(`/(components)/(payment)?id=${id}&size=${input}`)
}
// buy single Product


    const LoadingFunction =async()=>{
      setLike(value.some(key => key.id == id))
      console.log(Like)
      setLoad(true)
      let api=`https://nexx-js-e-commerce-app-491i.vercel.app/api/product`;
      try {
        //  console.log(`Fetching product with ID: ${id}`);
        let response= await axios.get(`${api}/${id}`);
        // console.log(response.data,"datat");
        setData(response.data);
        // store images
        const galleryImages = (response.data.galleryImages || []).map(imgUrl => 
          imgUrl.replace(/\.(jpg|jpeg|png|gif|svg)$/, '.webp')
        );
        setImages(galleryImages)
        // store a size
        setStoreSize(response.data.size.split(','))
        // store color
        setStoreColor(response.data.color.split(','));

        // store tags
        setStoreTags(response.data.tags.split(','));
        setLoad(false)
      } catch (error) {
        console.log(error,"error");
        setLoad(true)
      }
    }


    const deliveryOptions = [
      { id: 1, type: 'Standard', time: '5-7 days', price: '  ₹ 3.00' },
      { id: 2, type: 'Express', time: '2-3 days', price: '   ₹ 5.00' },
    ];
    const showNotice=()=>{
      Toast.show({
                     type: 'success', // 'success', 'error', 'info'
                     text1: "You can add this cart in your bag",
                    //  text2: "Successfully ", // Optional
                     position: 'top', // 'top', 'bottom', 'center'
                     visibilityTime: 4000, // Duration in milliseconds
                     autoHide: true, // Automatically hide after visibilityTime
                   });
    }

  useEffect(()=>{LoadingFunction()},[])
  return (
    <>
    <View style={{flex:1}}>
    {
      load ?
      <View style={{height:"100%", width:"100%", alignItems:"center", justifyContent:"center" }}>
          <Loader  loading={load}/>
        </View> :
        <>
        <View style={{position:"absolute", bottom:0, backgroundColor:"lightgray", width:"100%", zIndex:3, height:80 ,alignSelf:'flex-end', flexDirection:"row", justifyContent:"space-around",alignItems:"center"}}>
        <TouchableOpacity style={{marginBottom:0}} onPress={()=>{setLike(!Like),dispatch(addWishList({id:id,productname:data.name,size:"na",price:data.price,image:data.mainImage,qty:input}))}}>
          {
              (Like)?
             
              <AntDesign name='heart' size={25} color={"red"}/>:
              <AntDesign name='hearto' size={25} color={"red"}/>
             
          }
          </TouchableOpacity>
      <TouchableOpacity onPress={()=>{dispatch(addToCart({id:id,productname:data.name,size:"na",price:data.price,image:data.mainImage,qty:input})),showNotice()}}>
            <Text style={{paddingHorizontal:20, paddingVertical:10, backgroundColor:"black" ,color:"white", marginBottom:0, borderRadius:10}} >
          Add to Cart
      </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{BuySingleProduct()}}>
      <Text style={{paddingHorizontal:20, paddingVertical:10, backgroundColor:"blue", color:"white", marginBottom:0, borderRadius:10}}>Buy Now</Text>
      </TouchableOpacity>
   </View>
          <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.container}>
                <Swiper
                  style={styles.wrapper}
                  showsButtons={true}
                  paginationStyle={styles.pagination}
                  dotStyle={styles.dot}
                  activeDotStyle={styles.activeDot}
                >
                
                  {images.map((image ,index) => {  return(
                    <View key={index} style={styles.slide}>

                      {/* <Text>{image}</Text> */}
                      <Image source={{uri:image}} style={{width:"100%", height:"100%"}}  onError={() => <View>
                      <Loader loading={true} />
                      </View>} resizeMode='contain'/>
                    </View>
                  )})}
                </Swiper>
              </View>

{/* Product Details */}
  <View>
    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10, paddingHorizontal: 25 }}>
      <Text style={{ fontFamily: "cursive", fontSize: 25, fontWeight: '800' }}> ₹ {data.price}</Text>
      <TouchableOpacity style={{ padding: 10, borderRadius: 50, backgroundColor: "lightgray" }} onPress={()=>{onShare(id)}}>
        <FontAwesome name="share" size={20} color={"gray"} />
      </TouchableOpacity>
    </View>
    <View style={{ paddingHorizontal: 30, marginTop: 30 }}>
      <Text style={{ fontSize: 17, fontWeight: '800' }}>
      {data.name}
      </Text>
      <Text style={{ fontSize: 17, fontWeight: '400',  marginTop:5}}>
      {data.description}
      </Text>
    </View>
    <View style={{ flexDirection: "row", paddingHorizontal: 20, marginTop: 30, justifyContent: "space-between", alignItems: "center" }}>
      <View style={{ flexDirection: "row", gap: 20, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 20, fontWeight: '800' }}>Variations</Text>
        <FlatList
        data={storeColor}
        horizontal
        style={{ flexDirection:"row", width:60}}
        keyExtractor={(item) => item}
        renderItem={({item})=>(
          <TouchableOpacity style={{ padding: 5, backgroundColor: "lightgray", borderRadius: 5,marginLeft:2 }}>
          <Text>{item}</Text>
        </TouchableOpacity>
        )}
        />
       
      </View>
      <TouchableOpacity style={{ padding: 8, backgroundColor: "blue", borderRadius: 50, marginBottom: 5, position:"absolute", right:4 }}>
        <AntDesign name="arrowright" size={24} color={"white"} />
      </TouchableOpacity>
    </View>
    <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
      <ScrollView horizontal>
        {
          [1, 2, 3, 4].map((e, index) => (
            <Image 
              key={index} 
              source={{ uri: "https://media.istockphoto.com/id/136881877/photo/mountain-lake-with-dock-and-stars.jpg?s=612x612&w=0&k=20&c=hwMVAc4R5UGAOrQoZiXV4MYjuXodHWElPJp_ogCZySw=" }} 
              style={{ height: 100, width: 80, borderRadius: 5, marginLeft: 10 }} 
              resizeMode="cover" 
            />
          ))
        }
      </ScrollView>
    </View>
  </View>
  {/* Product Details */}



{/* delivery Section  */}




  <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
    <Text style={{ fontSize: 20, fontWeight: '800' }}>Delivery</Text>
    <View style={{ gap: 10, marginTop: 10 }}>
      {deliveryOptions.map((option) => (
        <TouchableOpacity 
          key={option.id}
          style={{ 
            borderWidth: 1, 
            borderRadius: 10, 
            borderColor: selectedOption === option.id ? "blue" : "lightgray", 
            flexDirection: "row", 
            paddingVertical: 15, 
            justifyContent: "space-between", 
            paddingHorizontal: 15, 
            alignItems: "center",
            backgroundColor: selectedOption === option.id ? "#e0f7fa" : "white" // Change background color when selected
          }}
          onPress={() => setSelectedOption(option.id)}
        >
          <View style={{ flexDirection: "row", gap: 20 }}>
            <Text style={{ fontSize: 16, fontWeight: '700', letterSpacing: 1 }}>{option.type}</Text>
            <Text style={{ color: "blue", fontStyle: "cursive" }}>{option.time}</Text>
          </View>
          <Text style={{ fontSize: 16, fontWeight: '800', fontStyle: "cursive" }}>{option.price}</Text>
        </TouchableOpacity>
      ))}
    </View>
  </View>
{/* delivery Section  */}

{/* specifile */}

<View style={{ paddingHorizontal: 20 }}>
    <Text style={{ fontSize: 20, fontWeight: '800', marginTop: 20 }}>
      Specifications
    </Text>
    <View style={{ marginTop: 10 }}>
      <Text style={{ fontSize: 16, fontWeight: '600' }}>
        Material
      </Text>
      <View style={{ flexDirection: "row", marginTop: 5, alignItems: "center", gap: 10 }}>
        <FlatList
           data={storeTags}
           horizontal
           keyExtractor={(item) => item}
           renderItem={({item})=>(

            <TouchableOpacity 
            style={{ 
              padding: 5, 
              backgroundColor: "lightgray", 
              borderRadius: 5, 
              fontWeight: 450, 
              marginLeft:2
            }}
            // onPress={() => alert('Nylon 5% selected')}
          >
            <Text style={{ fontWeight: 450 }}>{item}</Text>
          </TouchableOpacity>
           )} 
         />
       
      </View>
    </View>
    <View style={{ marginTop: 15 }}>
      <Text style={{ fontSize: 16, fontWeight: '800' }}>
        Origin
      </Text>
      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <TouchableOpacity 
          style={{ 
            paddingVertical: 5, 
            borderRadius: 5, 
            backgroundColor: "lightgray", 
            paddingHorizontal: 20 
          }}
          // onPress={() => alert('Origin: EU selected')}
        >
          <Text style={{ fontWeight: 450 }}>{data.brand}</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
{/* specifile */}



{/* Quamntity */}

      <View>
            {size ? (
              <View style={{ paddingHorizontal: 15 }}>
                <View style={{ gap: 10 }}>
                  <Text style={{ fontSize: 15, fontWeight: '600' }}>Color Options</Text>
                  <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ gap: 20 }}>
                    {storeSize.map((e, index) => (
                      <View style={{ marginLeft: 10 }} key={index}>
                        <Image
                          source={{ uri: "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg" }}
                          style={{ height: 80, width: 80, borderRadius: 5 }}
                        />
                      </View>
                    ))}
                  </ScrollView>

                  <View style={{ marginTop: 5 }}>
                    <Text style={{ fontSize: 15, fontWeight: '600' }}>Size</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                      <View style={{ flexDirection: "row", gap: 10, marginTop: 10 }}>
                        {storeSize.map((sizeOption, index) => (
                          <TouchableOpacity 
                            key={index} 
                            style={{ 
                              paddingHorizontal: 20, 
                              backgroundColor: "lightgray", 
                              borderRadius: 5, 
                              paddingVertical: 5 
                            }}
                            // onPress={() => alert(`Size ${sizeOption} selected`)}
                          >
                            <Text style={{ fontWeight: '500' }}>{sizeOption}</Text>
                          </TouchableOpacity>
                        ))}
                      </View>
                    </ScrollView>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 20 }}>
                      <Text style={{ fontSize: 20, fontWeight: '600' }}>Quantity</Text>
                      <View style={{ flexDirection: "row", gap: 20 }}>
                        <TouchableOpacity 
                          style={{ 
                            backgroundColor: "lightgray", 
                            paddingHorizontal: 20, 
                            paddingVertical: 10, 
                            borderRadius: 100, 
                            borderColor: "blue", 
                            borderWidth: 1 
                          }} 
                          onPress={() => setInput(input > 1 ? input - 1 : 1)}
                        >
                          <Text style={{ fontSize: 26, textAlign: "center", fontWeight: '800' }}>-</Text>
                        </TouchableOpacity>
                        <Text style={{ backgroundColor: "lightgray", borderRadius: 5, alignSelf: "center", paddingHorizontal: 20, paddingVertical: 10, fontSize: 20 }}>
                          {input}
                        </Text>
                        <TouchableOpacity 
                          style={{ 
                            backgroundColor: "lightgray", 
                            paddingHorizontal: 20, 
                            paddingVertical: 10, 
                            borderRadius: 100, 
                            borderColor: "blue", 
                            borderWidth: 1 
                          }} 
                          onPress={() => setInput(input + 1)}
                        >
                          <Text style={{ fontSize: 26, textAlign: "center", fontWeight: '800' }}>+</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            ) : (
              <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 15 }}>
                <Text style={{ fontSize: 18, fontWeight: '800' }}>Size guide</Text>
                <TouchableOpacity 
                  style={{ padding: 8, backgroundColor: "blue", borderRadius: 50 }} 
                  onPress={() => setSize(true)}
                >
                  <AntDesign name="arrowright" size={20} color={"white"} />
                </TouchableOpacity>
              </View>
            )}
          </View>
{/* Quamntity */}



{/* Rating */}
    <>
    <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
            <Text style={{ fontSize: 20, fontWeight: '800' }}>Rating & Reviews</Text>
            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10, gap: 5 }}>
              <Text><AntDesign name='star' size={20} color={"gold"} /></Text>
              <Text><AntDesign name='star' size={20} color={"gold"} /></Text>
              <Text><AntDesign name='star' size={20} color={"gold"} /></Text>
              <Text><AntDesign name='star' size={20} color={"gold"} /></Text>
              <Text><AntDesign name='star' size={20} color={"gold"} /></Text>
              <Text style={{ fontFamily: "cursive" }}>4/5</Text>
            </View>
            <View style={{ marginTop: 20 }}>
              <View style={{ flexDirection: "row", overflow: "hidden", gap: 10 }}>
                <View style={{ padding: 10, borderRadius: 50 }}>
                  <Image 
                    source={{ uri: "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" }} 
                    style={{ height: 60, width: 60, borderRadius: 50 }} 
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 15, fontWeight: '700' }}>Veronika</Text>
                  <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5, gap: 5 }}>
                    <Text><AntDesign name='star' size={15} color={"gold"} /></Text>
                    <Text><AntDesign name='star' size={15} color={"gold"} /></Text>
                    <Text><AntDesign name='star' size={15} color={"gold"} /></Text>
                    <Text><AntDesign name='star' size={15} color={"gold"} /></Text>
                    <Text><AntDesign name='star' size={15} color={"gold"} /></Text>
                    <Text style={{ fontFamily: "cursive" }}>4/5</Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 12, fontWeight: 400, overflowX: "hidden" }}>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non quasi doloribus delectus eaque consequatur facilis sint, dolorem suscipit facere ex dignissimos fuga quo quae sed nemo, voluptates fugiat, veritatis doloremque?
                    </Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity 
                style={{ backgroundColor: "blue", marginTop: 10, paddingVertical: 10, borderRadius: 10 }} 
                onPress={() => { setShow(!show) }}
              >
                <Text style={{ textAlign: "center", color: "white" }}>
                  {show ? "View All Reviews" : "Hide All Reviews"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {show ? null : <Reviews/>}
    </>

{/* Rating */}

            <Mostpopular/>
            <JustForYou/>
          </ScrollView></>

    }
</View>

<Toast/></>
  )
}


//  this  is css
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    height: 520,
  },
  slide: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 15,
  },
  pagination: {
    bottom: 10,
  },
  dot: {
    backgroundColor: '#dcdde1',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 3,
  },
  activeDot: {
    backgroundColor: '#2e86de',
    width: 16,
    height: 8,
    borderRadius: 4,
  },
});

