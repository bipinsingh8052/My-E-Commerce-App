import { addToCart } from "@/app/redux/slice/cart";
import { removeWishList } from "@/app/redux/slice/wish";
import { AppDispatch } from "@/app/redux/store";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Toast from "react-native-toast-message";
import { useDispatch, useSelector } from "react-redux";

export default function WishCart() {
    let dispatch:AppDispatch=useDispatch();
    let value=useSelector(state=>state.wish.items);
    console.log(value)

  return (
    <>
    <ScrollView  showsVerticalScrollIndicator={false}>
   
   {
  value.map((e:any,index:any)=>{return(
    <View
      key={index}
      style={{
        flexDirection: 'row',
        height: 130,
        borderRadius: 12,
        backgroundColor: '#fff',
        padding: 15,
        marginVertical: 8,
        marginHorizontal: 12,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 6,
      }}
    >
      {/* Image + Delete Icon */}
      <View style={{ position: 'relative', width: 100, height: '100%' }}>
        <Image
          source={{ uri: e.image }}
          style={{ width: '100%', height: '100%', borderRadius: 10 }}
          resizeMode="cover"
        />
        <TouchableOpacity
          onPress={()=>{dispatch(removeWishList(e.id)) , Toast.show({
            type: 'error', // 'success', 'error', 'info'
            text1: "Remove cart from your wishlist Cart",
            position: 'top', // 'top', 'bottom', 'center'
            visibilityTime: 4000, // Duration in milliseconds
            autoHide: true, // Automatically hide after visibilityTime
          })}}
          style={{
            position: 'absolute',
            bottom: 6,
            left: 6,
            backgroundColor: 'white',
            padding: 6,
            borderRadius: 20,
            borderColor: '#ccc',
            borderWidth: 1,
          }}
        >
          <AntDesign name="delete" size={18} color="blue" />
        </TouchableOpacity>
      </View>

      {/* Product Details */}
      <View style={{ flex: 1, marginLeft: 15, justifyContent: 'space-between', height: '100%' }}>
        <Text style={{ fontSize: 14, fontWeight: '600', color: '#333' }}>{e.productname}</Text>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }}>₹ {e.price}</Text>
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <Text
            style={{
              backgroundColor: '#87CEEB',
              paddingHorizontal: 12,
              paddingVertical: 4,
              borderRadius: 10,
              fontWeight: '500',
              fontSize: 13,
              color: '#000',
            }}
          >
            {e.qty}
          </Text>
          <Text
            style={{
              backgroundColor: '#87CEEB',
              paddingHorizontal: 12,
              paddingVertical: 4,
              borderRadius: 10,
              fontWeight: '500',
              fontSize: 13,
              color: '#000',
            }}
          >
            {e.size}
          </Text>
        </View>
      </View>

      {/* Add to Bag */}
      <TouchableOpacity onPress={()=>{dispatch(addToCart({id:e.id,image:e.image,price:e.price,productname:e.productname,qty:e.qty,size:e.size})),Toast.show({
                                    type: 'success', // 'success', 'error', 'info'
                                    text1: "Add to cart in your bag",
                                    position: 'top', // 'top', 'bottom', 'center'
                                    visibilityTime: 4000, // Duration in milliseconds
                                    autoHide: true, // Automatically hide after visibilityTime
                                  });}} style={{ padding: 8 }}>
        <Ionicons name="bag-add" size={28} color="blue" />
      </TouchableOpacity>
    </View>
    )})
   }
 
   </ScrollView>
 
   <Toast/></>
  );
}
