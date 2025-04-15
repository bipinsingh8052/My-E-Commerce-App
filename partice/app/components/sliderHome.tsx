import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';

const { width } = Dimensions.get('window');

const OnboardingScreen = () => {
  const router =useRouter();
  const gotoHome=()=>{
    router.push("/(tabs)")
  }
  return (
    <View style={styles.container}>
      <View style={styles.bgCurve} />

     <ScrollView style={{marginTop:150, marginRight:20, }} horizontal={true}>
   
      {
        [1,2,3].map((e,index)=>{return(
          <View key={index} style={{height:450, width:300, backgroundColor:"white",  borderRadius:20,  display:"flex", elevation:5, borderWidth:0.1  ,marginLeft:20}}>
      
      <View style={{height:180,width:"100%"}}>
        <Image source={{uri:"https://lh3.googleusercontent.com/4nn_Wu86KECp5LlECA4tGGb7TdULkfoAe74NJN1PPMTf1IDXO0VvpYgBE2146dE3ezHgsmfkTHjYS6YEGUEJCmvPIeCnrwUnk1fvwwk0flUu=s750"}} style={{height:"100%",width:"100%"}}/>
      </View>
      <View style={{ marginTop:5, justifyContent:"center", alignItems:"center" }}>
        <View>
        <Text style={{fontSize:30, textAlign:"center"}}>Hello</Text>
        <Text style={{paddingLeft:30, paddingRight:30, paddingTop:20, textAlign:'center'}}>Lorem ipsum dolor sitae quasi delectus deleniti ex commodi, voluptatem deserunt, est qui quaerat amet magnam, sint maxime? Architecto id consectetur tenetur.</Text>
        </View>
      </View>
      <TouchableOpacity style={{backgroundColor:"blue", marginRight:20, marginLeft:20, paddingVertical:15, borderRadius:20, marginTop:20}}>
        <Text style={{textAlign:"center", color:"white", fontSize:15}} onPress={gotoHome}> Lets's Start</Text>
      </TouchableOpacity>
      </View>
        )})
      }
      
     
     </ScrollView >
      <View style={styles.dots}>
          <View style={styles.dotInactive} />
          <View style={styles.dotInactive} />
          <View style={styles.dotActive} />
        </View>
    </View>
  );
};

export default OnboardingScreen;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    bgCurve: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: width,
      height: 250,
      backgroundColor: '#0044FF',
      borderBottomRightRadius: 100,
    },
    card: {
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 20,
      width: width * 0.85,
      shadowColor: '#000',
      shadowOpacity: 0.15,
      shadowOffset: { width: 0, height: 4 },
      shadowRadius: 8,
      elevation: 10,
      alignItems: 'center',
    },
    imageRow: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 20,
      width:"100%"
    },
    img: {
      width: 140,
      height: 140,
      borderRadius: 10,
      marginHorizontal: 5,
    },
    title: {
      fontSize: 24,
      fontWeight: '700',
      marginBottom: 10,
    },
    subtitle: {
      fontSize: 14,
      color: '#555',
      textAlign: 'center',
      marginBottom: 20,
    },
    button: {
      backgroundColor: '#0066FF',
      paddingVertical: 12,
      paddingHorizontal: 40,
      borderRadius: 10,
      marginBottom: 20,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '600',
    },
    dots: {
      flexDirection: 'row',
      marginTop:50,
      justifyContent: 'center',
    },
    dotInactive: {
      width: 10,
      height: 10,
      backgroundColor: '#ccc',
      borderRadius: 5,
      margin: 5,
    },
    dotActive: {
      width: 10,
      height: 10,
      backgroundColor: '#0066FF',
      borderRadius: 5,
      margin: 5,
    },
  });
  
