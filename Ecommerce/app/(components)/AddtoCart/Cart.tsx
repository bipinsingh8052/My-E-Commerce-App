import { qntyDecrease, qntyIncrease, removeFromCart } from "@/app/redux/slice/cart";
import { AppDispatch } from "@/app/redux/store";
import { AntDesign, EvilIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useEffect, useMemo, useState } from "react";
import { Image, Modal, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import RadioGroup, {RadioButtonProps} from 'react-native-radio-buttons-group';
import { useDispatch, useSelector } from "react-redux";
import Toast from "react-native-toast-message";
export default function Cart() {
  const [modalVisible, setModalVisible] = useState(false);

  const [loadering,setloadering]=useState(false)

  
  let val=useSelector(state=>state.cart.items)
  console.log(val,   "tihs is all cart","valeus thsi is radd to cart")
  
      let dispatch: AppDispatch=useDispatch();



// show toaster 
const showNotice=()=>{
  Toast.show({
                     type: 'success', // 'success', 'error', 'info'
                     text1: "You can remove this cart in your bag",
                    //  text2: "Successfully ", // Optional
                     position: 'top', // 'top', 'bottom', 'center'
                     visibilityTime: 4000, // Duration in milliseconds
                     autoHide: true, // Automatically hide after visibilityTime
                   });
                   setloadering(true)
}
// show toaster 


  useEffect(()=>{
    if(loadering){

      setloadering(false)
    }
  },[loadering])

  const [selectedId, setSelectedId] = useState<string | undefined>();
  const radioButtons: RadioButtonProps[] = useMemo(() => ([
    {
        id: '1', // acts as primary key, should be unique and non-empty string
        label: 'Office',
        value: 'Office'
    },
    {
        id: '2',
        label: 'Home',
        value: 'Home'
    },{
      id:"3",
      label:"Other",
      value:"Other"
    }
]), []);
  return(
    <>
      <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          >
            <View style={{position:"absolute", top:0, flex:1, backgroundColor:"f4f4f4", width:"100%", height:"100%", alignItems:"center", justifyContent:"center" }}>
              <View style={{height:"auto", width:"80%", backgroundColor:"white", borderRadius:10, gap:20, borderWidth:0.5, borderColor:"transparent"}}>
                <View style={{ marginTop:20, paddingHorizontal:10, gap:10}}>
                  <Text style={{fontSize:18, fontWeight:700 }}> Select One Option :</Text>
                <RadioGroup  
            radioButtons={radioButtons} 
            onPress={setSelectedId}
            selectedId={selectedId} layout="row"/>
                </View>
                <View style={{paddingHorizontal:20,  gap:10}}>
                  <Text style={{fontSize:16, fontWeight:600}}>Enter the City Name:</Text>
                  <TextInput style={{height:40, width:"100%", borderRadius:20, borderWidth:0.5, paddingLeft:10}} placeholder="Enter the City name" />
                </View>
                <View style={{paddingHorizontal:20,  gap:10}}>
                  <Text style={{fontSize:16, fontWeight:600}}>Enter the House No:</Text>
                  <TextInput style={{height:40, width:"100%", borderRadius:20, borderWidth:0.5, paddingLeft:10}} placeholder="e.g 122/25 " />
                </View>
                <View style={{paddingHorizontal:20,  gap:10}}>
                  <Text style={{fontSize:16, fontWeight:600}}>Enter the House No:</Text>
                  <TextInput style={{height:40, width:"100%", borderRadius:20, borderWidth:0.5, paddingLeft:10}} placeholder="e.g 122/25 " />
                </View>
                <View style={{paddingHorizontal:20, marginBottom:10}}>
            <TouchableOpacity style={{justifyContent:"center", alignItems:"center", backgroundColor:"blue", paddingVertical:10, borderRadius:20, margin:0}} onPress={()=>{setModalVisible(false)}}>
                  <Text style={{color:"white", fontSize:15, fontWeight:700}} >Submit your Address</Text>
                </TouchableOpacity>
            </View>
                
              </View>
            

            </View>

          </Modal>




    <View style={{paddingHorizontal:20}}>
      <View  style={{flexDirection:"row", alignItems:"center", gap:10, marginTop:20}}>
        <Text style={{fontSize:30, fontWeight:700}}>Cart</Text>
        <Text style={{paddingVertical:5, backgroundColor:"lightgray", borderRadius:100, textAlign:"center", paddingHorizontal:10, fontSize:18, fontWeight:700}}>{val.length}</Text>
      </View>
      <View style={{flexDirection:"row", width:"100%", marginTop:10,padding:10, backgroundColor:"#D3D3D3", borderRadius:10, alignItems:"flex-end", justifyContent:"space-around"}}>
        <View style={{width:"80%"}}> 
          <Text style={{fontSize:16, fontWeight:700}}>
            Shipping Address
          </Text>
          <Text style={{fontSize:14, fontWeight:350}}>
            26 Dearing so.2 there dont woard an Pitu hnshfhvbhfbfbfhfh
          </Text>
        </View>
        <View >
          <TouchableOpacity style={{paddingHorizontal:8, paddingVertical:10, backgroundColor:"blue", borderRadius:50, textAlign:"center" }} onPress={()=>{setModalVisible(true)}}><EvilIcons name="pencil" size={22} color={"white"}/></TouchableOpacity>
        </View>
      </View>
      <View style={{marginTop:10}}>
        {/* <ScrollView  showsVerticalScrollIndicator={false}> */}
          
         {
          val.map((e,index)=>
            { 


            const galleryImages = e.image.includes('.svg') 
            ? e.image.replace('/upload/', '/upload/f_png/') 
            : e.image;
            return(
            <View key={index} style={{flexDirection:"row", height:120, width:"100%", marginTop:10, gap:15}}>
            <View style={{borderRadius:5, borderWidth:1, borderColor:"gray", padding:5}}>
              <Image source={{uri:galleryImages}} style={{height:108, width:108, borderRadius:5}} />
              <TouchableOpacity style={{position:"absolute", bottom:5, left:10, paddingHorizontal:10, paddingVertical:10, backgroundColor:"white", borderRadius:50}} onPress={()=>{dispatch(removeFromCart(e.id)),showNotice()}}> 
                <AntDesign name="delete" size={20} color={"blue"}/>
              </TouchableOpacity>
            </View>
            <View style={{width:"60%", justifyContent:"space-between", paddingBottom:3}}>
             
                <Text style={{fontSize:13, fontWeight:599}}>
                  {e.productname}
                </Text>
              <Text style={{fontSize:15,  fontWeight:699}}>
                Pinnk , Size {e.size}
              </Text>
              <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center", gap:20}}>
                <Text style={{fontWeight:900, fontSize:17}}>$ {e.price}</Text>
                <View style={{flexDirection:"row", gap:5, alignItems:"center"}}>
                  <TouchableOpacity style={{paddingHorizontal:12, paddingVertical:0, borderWidth:1, borderColor:"blue", borderRadius:50}} onPress={()=>{dispatch(qntyDecrease({id:e.id}))}}>
                    <Text style={{fontSize:25 ,color:"blue"}}>-</Text>
                  </TouchableOpacity>
                  <Text style={{paddingHorizontal:10, paddingVertical:6,textAlign:"center",borderRadius:2, backgroundColor:"#87CEFA", fontWeight:800}}>{e.qty}
                  </Text>
                  <TouchableOpacity  style={{paddingHorizontal:12, paddingVertical:0, borderWidth:1, borderColor:"blue", borderRadius:50}} onPress={()=>{dispatch(qntyIncrease({id:e.id}))}}>
                    <Text style={{fontSize:25 ,color:"blue"}}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          )})
         }
        {/* </ScrollView> */}

      </View>
      {/* <View style={{position:"absolute", top:0, backgroundColor:"white", width:"100%"}}>
        <View style={{ height:60,flexDirection:"row", justifyContent
          :"space-between", alignItems:"center", paddingHorizontal:20
        }}>
          <Text style={{fontSize:20, fontWeight:800}}>Total $ 43,00</Text>
          <TouchableOpacity style={{backgroundColor:"blue", paddingHorizontal:10, paddingVertical:5, borderRadius:10}}>
            <Text style={{color:"white", fontWeight:500, fontSize:14}}>Checkout</Text>
          </TouchableOpacity>
        </View>
      </View> */}
    
      
     
      {/* <Mostpopular/>
      <AllItems/> */}
    
    </View>
  <Toast/>
    </>
  );
}
