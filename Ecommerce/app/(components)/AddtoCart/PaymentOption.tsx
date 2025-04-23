import { AntDesign, EvilIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useMemo, useState } from "react";
import { Image, Modal, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import RadioGroup, {RadioButtonProps} from 'react-native-radio-buttons-group';
import { useSelector } from "react-redux";
export default function PaymentOption() {
  // redux  value
  const value =useSelector(state=>state.cart.items);
  // console.log(value,"payment console")
  const totals = value.reduce(
    (accumulator, e) => {
      accumulator.total += e.price * e.qty; // Sum total price
      accumulator.quantity += e.qty; // Sum total quantity
      return accumulator; // Return the accumulator for the next iteration
    },
    { total: 0, quantity: 0 } // Initial value for the accumulator
  );
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibletwo, setModalVisibletwo] = useState(false);
  const[input,setinput]=useState({
    name:"",
    mobileNo:"",
    NoAnother:"",
    addressOption:"",
    cityname:"",
    HouseNo:"",
    addressNo:"",
    PinCode:"",
  })

  const [selectedId, setSelectedId] = useState<string | undefined>();
  const [selectedPaymentId, setSelectedPaymentId] = useState<string | undefined>();
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
const Paymentbtn: RadioButtonProps[] = useMemo(() => ([
  {
      id: '1', // acts as primary key, should be unique and non-empty string
      label: 'Express',
      value: 'Express',
      days:"7-5"
  },
  {
      id: '2',
      label: 'Standard',
      value: 'Standard',
      days:"3-5"
  }
]), []);




// handle input 
const handleInput=()=>{
  console.log(input);
}
// handle input 
  return(
    <SafeAreaView>
  
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
                  <TextInput style={{height:40, width:"100%", borderRadius:20, borderWidth:0.5, paddingLeft:10}} placeholder="Enter the City name" onChangeText={(e)=>{setinput(pre=>({...pre,cityname:e}))}} />
                </View>
                <View style={{paddingHorizontal:20,  gap:10}}>
                  <Text style={{fontSize:16, fontWeight:600}}>Enter the House No:</Text>
                  <TextInput style={{height:40, width:"100%", borderRadius:20, borderWidth:0.5, paddingLeft:10}} placeholder="e.g 122/25 " keyboardType="default"  onChangeText={(e)=>{setinput(pre=>({...pre,HouseNo:e}))}} />
                </View>
                <View style={{paddingHorizontal:20,  gap:10}}>
                  <Text style={{fontSize:16, fontWeight:600}}>Enter the Address No:</Text>
                  <TextInput style={{height:40, width:"100%", borderRadius:20, borderWidth:0.5, paddingLeft:10}} placeholder="e.g 122/25 "  keyboardType="default"  onChangeText={(e)=>{setinput(pre=>({...pre,addressNo:e}))}}/>
                </View>
                <View style={{paddingHorizontal:20,  gap:10}}>
                  <Text style={{fontSize:16, fontWeight:600}}>Enter the PinCode No:</Text>
                  <TextInput style={{height:40, width:"100%", borderRadius:20, borderWidth:0.5, paddingLeft:10}} placeholder="Enter the City name" keyboardType="numeric"  onChangeText={(e)=>{setinput(pre=>({...pre,PinCode:e}))}} />
                </View>
                <View style={{paddingHorizontal:20, marginBottom:10}}>
            <TouchableOpacity style={{justifyContent:"center", alignItems:"center", backgroundColor:"blue", paddingVertical:10, borderRadius:20, margin:0}} onPress={()=>{setModalVisible(false),handleInput()}}>
                  <Text style={{color:"white", fontSize:15, fontWeight:700}} >Submit your Address</Text>
                </TouchableOpacity>
            </View>
                
              </View>
            

            </View>

          </Modal>

          <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisibletwo}
          >
            <View style={{position:"absolute", top:0, flex:1, backgroundColor:"f4f4f4", width:"100%", height:"100%", alignItems:"center", justifyContent:"center" }}>
              <View style={{height:"auto", width:"80%", backgroundColor:"white", borderRadius:10, gap:20, borderWidth:0.5, borderColor:"transparent"}}>
              <View style={{paddingHorizontal:20,  gap:10}}>
                  <Text style={{fontSize:16, fontWeight:600}}>Enter the Name:</Text>
                  <TextInput style={{height:40, width:"100%", borderRadius:20, borderWidth:0.5, paddingLeft:10}} placeholder="Enter the  name" keyboardType="default"  onChangeText={(e)=>{setinput(pre=>({...pre,name:e}))}} />
                </View>
                <View style={{paddingHorizontal:20,  gap:10}}>
                  <Text style={{fontSize:16, fontWeight:600}}>Enter the Mobile No:</Text>
                  <TextInput style={{height:40, width:"100%", borderRadius:20, borderWidth:0.5, paddingLeft:10}} placeholder="Enter the Mobile no" keyboardType="phone-pad"  onChangeText={(e)=>{setinput(pre=>({...pre,mobileNo:e}))}} />
                </View>
                <View style={{paddingHorizontal:20,  gap:10}}>
                  <Text style={{fontSize:16, fontWeight:600}}>Enter the Another No:</Text>
                  <TextInput style={{height:40, width:"100%", borderRadius:20, borderWidth:0.5, paddingLeft:10}} placeholder="e.g 122/25 " keyboardType="phone-pad"   onChangeText={(e)=>{setinput(pre=>({...pre,NoAnother:e}))}} />
                </View>
               
                <View style={{paddingHorizontal:20, marginBottom:10}}>
            <TouchableOpacity style={{justifyContent:"center", alignItems:"center", backgroundColor:"blue", paddingVertical:10, borderRadius:20, margin:0}} onPress={()=>{setModalVisibletwo(false),handleInput()}}>
                  <Text style={{color:"white", fontSize:15, fontWeight:700}} >Submit Contact Details </Text>
                </TouchableOpacity>
            </View>
                
              </View>
            

            </View>

          </Modal>
          

          <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{position:"absolute", bottom:0, zIndex:8, backgroundColor:"white", width:"100%"}}>
        <View style={{ height:60,flexDirection:"row", justifyContent
          :"space-between", alignItems:"center", paddingHorizontal:20
        }}>
          <Text style={{fontSize:20, fontWeight:800}}>Total $ {totals.total}</Text>
          <TouchableOpacity style={{backgroundColor:"black", paddingHorizontal:30, paddingVertical:5, borderRadius:10}}>
            <Text style={{color:"white", fontWeight:500, fontSize:14}}>Pay</Text>
          </TouchableOpacity>
        </View>
      </View>

    <View style={{paddingHorizontal:20}}>
      <View  style={{flexDirection:"row", alignItems:"center", gap:10, marginTop:20}}>
        <Text style={{fontSize:30, fontWeight:700}}>Payment</Text>
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
      <View style={{flexDirection:"row", width:"100%", marginTop:10,padding:10, backgroundColor:"#D3D3D3", borderRadius:10, alignItems:"flex-end", justifyContent:"space-around"}}>
        <View style={{width:"80%"}}> 
          <Text style={{fontSize:16, fontWeight:700}}>
          Contact Information
          </Text>
          <Text style={{fontSize:14, fontWeight:350}}>
           +12345678909876
          </Text>
          <Text style={{fontSize:14, fontWeight:350}}>
           bipinsfingh80@gmaail.com
          </Text>
        </View>
        <View >
          <TouchableOpacity style={{paddingHorizontal:8, paddingVertical:10, backgroundColor:"blue", borderRadius:50, textAlign:"center" }} onPress={()=>{setModalVisibletwo(true)}}><EvilIcons name="pencil" size={22} color={"white"}/></TouchableOpacity>
        </View>
      </View>



      {/* Items in there */}
      <View style={{marginTop:20}}>
        <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
          <View style={{flexDirection:"row", alignItems:"center", gap:10 }}>
            <Text style={{fontSize:24, fontWeight:800}}>Items</Text>
            <Text style={{paddingHorizontal:10, paddingVertical:5, backgroundColor:"#87CEFA", borderRadius:50, fontSize:12, fontWeight:900}}>{value.length}</Text>
          </View>
          <TouchableOpacity style={{borderWidth:1, borderColor:"blue", paddingHorizontal:10, paddingVertical:5, borderRadius:10}}>
            <Text style={{color:"blue"}}>Add Voucher</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView>
        {
        value.map((e,index)=>{
          const galleryImages = e.image.includes('.svg') 
          ? e.image.replace('/upload/', '/upload/f_png/') 
          : e.image;
          return(
          <View key={index} style={{height:70, width:"100%", flexDirection:"row", gap:10, alignItems:"center", marginTop:20}}>
          <View style={{height:"90%", width:"20%", padding:5, backgroundColor:"#87CEFA", borderRadius:50}}>
            <Image  source={{uri:galleryImages}} style={{height:"100%", width:"100%", borderRadius:50}} />
            <Text style={{position:"absolute", backgroundColor:"#87CEFA", borderRadius:50, right:-5, paddingHorizontal:8, paddingVertical:3, fontWeight:800, textAlign:"center", fontSize:18}}> {e.qty}</Text>
          </View>
          <View style={{width:"50%", alignSelf:"flex-start", paddingTop:10}}>
            <Text style={{fontSize:10, fontWeight:500,}}>{e.productname}</Text>
            <Text style={{fontSize:10, fontWeight:500,}}> size : {e.size}</Text>
          </View>
          <View style={{width:"30%"}}>
            <Text style={{fontSize:20, fontWeight:800}}>
              $ {e.price}
            </Text>
          </View>
        </View>
        )})
        }
      </ScrollView>
{/* Shppping section */}

            <View style={{ flexDirection: 'column', gap: 10,  marginTop:10}}>
              <Text style={{fontSize:25, fontWeight:800}}>Shipping Options</Text>
  {Paymentbtn.map((btn) => (
    <TouchableOpacity
      key={btn.id}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: selectedPaymentId === btn.id ? '#007bff' : '#ccc',
        borderRadius: 8,
        padding: 10,
        backgroundColor: selectedPaymentId === btn.id ? '#e6f0ff' : 'transparent',
      }}
      onPress={() => setSelectedPaymentId(btn.id)}
    >
      <View
        style={{
          height: 20,
          width: 20,
          borderRadius: 10,
          borderWidth: 2,
          borderColor: '#007bff',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {selectedPaymentId === btn.id && (
          <View
            style={{
              height: 10,
              width: 10,
              borderRadius: 5,
              backgroundColor: '#007bff',
            }}
          />
        )}
      </View>

      <View style={{ marginLeft: 10, flexDirection:"row", justifyContent:"space-between", gap:20 }}>
        <Text style={{ fontWeight: 'bold' }}>{btn.label}</Text>
        <Text style={{color:"blue",  paddingHorizontal:20, backgroundColor:"white", borderRadius:10}}> {btn.days} days</Text>
        <Text style={{fontWeight:"bold"}}>Free</Text>
      </View>
    </TouchableOpacity>
  ))}
  <Text style={{fontSize:8}}>
    Delivered on or before Thursday,23 April 2020
  </Text>
</View>

      </View>
{/* Shppping section */}


{/* payment Method section */}
<View style={{paddingHorizontal:20, marginTop:10, marginBottom:90}}>

  <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
    <Text style={{fontSize:22, fontWeight:800}}>Payment Method</Text>
    <TouchableOpacity style={{backgroundColor:"blue", paddingHorizontal:5, paddingVertical:8,borderRadius:50, alignSelf:"center"}}><EvilIcons name="pencil" size={25} color={"white"}/></TouchableOpacity>
  </View>
</View>
{/* payment Method section */}

    {/*Price section is there */}
   

      </ScrollView>
    </SafeAreaView>
  );
}
