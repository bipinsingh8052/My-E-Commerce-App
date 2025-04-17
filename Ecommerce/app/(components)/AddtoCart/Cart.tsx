import { AntDesign, EvilIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useMemo, useState } from "react";
import { Image, Modal, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import RadioGroup, {RadioButtonProps} from 'react-native-radio-buttons-group';
import Mostpopular from "../Mostpopular";
import AllItems from "../AllItems";
export default function Cart() {
  const [modalVisible, setModalVisible] = useState(false);

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
            <View style={{position:"absolute", top:0, flex:1, backgroundColor:"00FFFFFF", width:"100%", height:"100%", alignItems:"center", justifyContent:"center" }}>
              <View style={{height:"auto", width:"80%", backgroundColor:"white", borderRadius:10, gap:20, borderWidth:0.5}}>
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
        <Text style={{paddingVertical:5, backgroundColor:"lightgray", borderRadius:100, textAlign:"center", paddingHorizontal:10, fontSize:18, fontWeight:700}}>2</Text>
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
          [1,2].map((e,index)=>{return(
            <View key={index} style={{flexDirection:"row", height:120, width:"100%", marginTop:10, gap:15}}>
            <View style={{borderRadius:5, borderWidth:1, borderColor:"gray", padding:5}}>
              <Image source={{uri:"https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"}} style={{height:108, width:108, borderRadius:5}} />
              <TouchableOpacity style={{position:"absolute", bottom:5, left:10, paddingHorizontal:10, paddingVertical:10, backgroundColor:"white", borderRadius:50}}> 
                <AntDesign name="delete" size={20} color={"blue"}/>
              </TouchableOpacity>
            </View>
            <View style={{width:"60%", justifyContent:"space-between", paddingBottom:3}}>
             
                <Text style={{fontSize:13, fontWeight:599}}>
                  Lorwm vcejcb abekjhf  abajc ajh afajfhi bipi  abheb
                </Text>
              <Text style={{fontSize:15,  fontWeight:699}}>
                Pinnk , Size M
              </Text>
              <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center", gap:20}}>
                <Text style={{fontWeight:900, fontSize:17}}>$ 12,00</Text>
                <View style={{flexDirection:"row", gap:5, alignItems:"center"}}>
                  <TouchableOpacity style={{paddingHorizontal:12, paddingVertical:0, borderWidth:1, borderColor:"blue", borderRadius:50}}>
                    <Text style={{fontSize:25 ,color:"blue"}}>-</Text>
                  </TouchableOpacity>
                  <Text style={{paddingHorizontal:10, paddingVertical:6,textAlign:"center",borderRadius:2, backgroundColor:"#87CEFA", fontWeight:800}}>0
                  </Text>
                  <TouchableOpacity  style={{paddingHorizontal:12, paddingVertical:0, borderWidth:1, borderColor:"blue", borderRadius:50}}>
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
  
    </>
  );
}
