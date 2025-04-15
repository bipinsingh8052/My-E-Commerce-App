import React, {useState} from 'react';

import { TouchableOpacity,Image, TextInput } from 'react-native'
import { useRouter } from 'expo-router';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  const router=useRouter();
    const gotoBack=()=>{
      router.push("/(auth)/sixPage")
    }
    const gotonext=()=>{
      router.push("/(auth)/eightPage")
    }
  const [modalVisible, setModalVisible] = useState(true);
  return (
<>
     <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
          <View style={{height:20, width:"100%"}}></View>
          <View style={{justifyContent:"center", gap:20, alignItems:"center"}}>
            <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBvqzyx_zoi6q2c0Gd1XnE7wysD9PGOLe3-A&s'}} style={{height:120, width:120, borderRadius:100, borderWidth:1, paddingHorizontal:20}}/>
            <Text style={{fontSize:25, fontWeight:900} }>Password Recovery</Text>
            <View style={{flexWrap:'wrap' ,width:"70%"}}>
            <Text style={{fontSize:15, fontWeight:300}}>Enter 4-digit code we sent you </Text>
            <Text style={{textAlign:"center", fontSize:15, fontWeight:300}}>on your phone number</Text>
            </View>
            <View>
              <Text style={{fontWeight:800, fontSize:15}}>+98********00</Text>
            </View>
    
          </View>
          <View style={{flexDirection:"row", gap:20, marginTop:40}}>
          <TextInput style={{height:40, width:40, borderRadius:100, backgroundColor:"white"}}/>
          <TextInput style={{height:40, width:40, borderRadius:100, backgroundColor:"white"}}/>
          <TextInput style={{height:40, width:40, borderRadius:100, backgroundColor:"white"}}/>
          <TextInput style={{height:40, width:40, borderRadius:100, backgroundColor:"white"}}/>
          </View>
          <View style={{width:"100%", gap:20, padding:20, marginTop:120, justifyContent:"center", alignItems:"center"}}>
            <TouchableOpacity>
              <Text style={{backgroundColor:"red", color:"white",borderRadius:20 ,textAlign:"center", paddingHorizontal:30, paddingVertical:15, fontSize:20, width:"80%"}} onPress={() => setModalVisible(true)}> Send Again</Text>
             {modalVisible? <SafeAreaProvider>
      <SafeAreaView style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView} >
              <Text style={{borderRadius:50, height:60, width:60, textAlign:"center",padding:20, bottom:60, backgroundColor:"white" ,shadowColor: '#000',shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 5,}}>Hello</Text>
              <View style={{justifyContent:"center", alignItems:"center", gap:5, bottom:20}}>
              <Text >You reached out maximum </Text>
              <Text>Amount of attempts</Text>
              <Text>Please. try later.</Text>
              </View>
              <Pressable
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={{backgroundColor:"black", color:"white", paddingHorizontal:40, paddingVertical:10, borderRadius:20, fontSize:16}}>Okay</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
       
      </SafeAreaView>
    </SafeAreaProvider>: " "}
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={{textAlign:"center", fontSize:15}} onPress={gotoBack}> Cancel</Text>
            </TouchableOpacity>
          </View>
          </View>
   
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:"red"
  },
  modalView: {
  
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default App;