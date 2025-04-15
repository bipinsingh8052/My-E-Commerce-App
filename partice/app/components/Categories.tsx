import { AntDesign } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React from 'react'
import { Text, View ,Image, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native'


export default function Categories() {
  const route=useRouter();
  const gotoDetail=()=>{
    // console.log("nav")
    route.push("/ProductDetailsAll")
  }
 
  return (
    <View style={{height:350,  marginTop:10, marginLeft:10, marginRight:10}}>
        <View style={{height:60, flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
          <Text style={{fontSize:22, fontWeight:700}}>Categories</Text>
          <View style={{flexDirection:"row", gap:20, alignItems:"center", justifyContent:"center", paddingRight:20}}>
            <Text style={{fontSize:16, fontWeight:700}}> See All</Text>
            <View style={{ backgroundColor:"blue", padding:10, borderRadius:50 }}>
            <AntDesign name="arrowright" size={20} color={"white"}/>
            </View>
          </View>
        </View>

<ScrollView horizontal>
<View style={{flexDirection:"row", flexWrap:"wrap"}}>
  <TouchableOpacity onPress={()=>{gotoDetail()}}>
              <View style={{ elevation:5, borderWidth:1, marginHorizontal:5, borderRadius:5, overflow:"hidden", marginTop:5}}>
          <View  style={{height:220, width:170, flexDirection:"row"}}>
            <View style={{ height:220, width:170, flexDirection:"row", flexWrap:"wrap", gap:2}}>
            <Image source={{uri:"https://www.thesun.co.uk/wp-content/uploads/2021/12/MT-SHOPPING-OFF-PLATT.jpg?strip=all&quality=100&w=1200&h=800&crop=1"}} style={{height:80 ,width:80 }} />
            <Image source={{uri:"https://www.thesun.co.uk/wp-content/uploads/2021/12/MT-SHOPPING-OFF-PLATT.jpg?strip=all&quality=100&w=1200&h=800&crop=1"}} style={{height:80 ,width:80 }} />
            <Image source={{uri:"https://www.thesun.co.uk/wp-content/uploads/2021/12/MT-SHOPPING-OFF-PLATT.jpg?strip=all&quality=100&w=1200&h=800&crop=1"}} style={{height:80 ,width:80 }} />
            <Image source={{uri:"https://www.thesun.co.uk/wp-content/uploads/2021/12/MT-SHOPPING-OFF-PLATT.jpg?strip=all&quality=100&w=1200&h=800&crop=1"}} style={{height:80 ,width:80 }} />
            <Text style={{textAlign:"center", fontSize:20, fontWeight:700, paddingTop:10}}>
              Clothing
            </Text>
            <Text style={{fontSize:17, fontWeight:200, marginRight:10, paddingTop:10, paddingLeft:30}}>New</Text>

            </View>
          </View>
        
          </View>
          </TouchableOpacity>
          <View style={{ elevation:5, borderWidth:1, marginHorizontal:5, borderRadius:5, overflow:"hidden", marginTop:5}}>
          <View  style={{height:220, width:170, flexDirection:"row"}}>
            <View style={{ height:220, width:170, flexDirection:"row", flexWrap:"wrap", gap:2}}>
            <Image source={{uri:"https://www.thesun.co.uk/wp-content/uploads/2021/12/MT-SHOPPING-OFF-PLATT.jpg?strip=all&quality=100&w=1200&h=800&crop=1"}} style={{height:80 ,width:80 }} />
            <Image source={{uri:"https://www.thesun.co.uk/wp-content/uploads/2021/12/MT-SHOPPING-OFF-PLATT.jpg?strip=all&quality=100&w=1200&h=800&crop=1"}} style={{height:80 ,width:80 }} />
            <Image source={{uri:"https://www.thesun.co.uk/wp-content/uploads/2021/12/MT-SHOPPING-OFF-PLATT.jpg?strip=all&quality=100&w=1200&h=800&crop=1"}} style={{height:80 ,width:80 }} />
            <Image source={{uri:"https://www.thesun.co.uk/wp-content/uploads/2021/12/MT-SHOPPING-OFF-PLATT.jpg?strip=all&quality=100&w=1200&h=800&crop=1"}} style={{height:80 ,width:80 }} />
            <Text style={{textAlign:"center", fontSize:20, fontWeight:700, paddingTop:10}}>
              Shoes
            </Text>
            <Text style={{fontSize:17, fontWeight:200, marginRight:10, paddingTop:10, paddingLeft:30}}>New</Text>

            </View>
          </View>
        
          </View>
          <View style={{ elevation:5, borderWidth:1, marginHorizontal:5, borderRadius:5, overflow:"hidden", marginTop:5}}>
          <View  style={{height:220, width:170, flexDirection:"row"}}>
            <View style={{ height:220, width:170, flexDirection:"row", flexWrap:"wrap", gap:2}}>
            <Image source={{uri:"https://www.thesun.co.uk/wp-content/uploads/2021/12/MT-SHOPPING-OFF-PLATT.jpg?strip=all&quality=100&w=1200&h=800&crop=1"}} style={{height:80 ,width:80 }} />
            <Image source={{uri:"https://www.thesun.co.uk/wp-content/uploads/2021/12/MT-SHOPPING-OFF-PLATT.jpg?strip=all&quality=100&w=1200&h=800&crop=1"}} style={{height:80 ,width:80 }} />
            <Image source={{uri:"https://www.thesun.co.uk/wp-content/uploads/2021/12/MT-SHOPPING-OFF-PLATT.jpg?strip=all&quality=100&w=1200&h=800&crop=1"}} style={{height:80 ,width:80 }} />
            <Image source={{uri:"https://www.thesun.co.uk/wp-content/uploads/2021/12/MT-SHOPPING-OFF-PLATT.jpg?strip=all&quality=100&w=1200&h=800&crop=1"}} style={{height:80 ,width:80 }} />
            <Text style={{textAlign:"center", fontSize:20, fontWeight:700, paddingTop:10}}>
              Bags
            </Text>
            <Text style={{fontSize:17, fontWeight:200, marginRight:10, paddingTop:10, paddingLeft:30}}>New</Text>

            </View>
          </View>
        
          </View>
          <View style={{ elevation:5, borderWidth:1, marginHorizontal:5, borderRadius:5, overflow:"hidden", marginTop:5}}>
          <View  style={{height:220, width:170, flexDirection:"row"}}>
            <View style={{ height:220, width:170, flexDirection:"row", flexWrap:"wrap", gap:2}}>
            <Image source={{uri:"https://www.thesun.co.uk/wp-content/uploads/2021/12/MT-SHOPPING-OFF-PLATT.jpg?strip=all&quality=100&w=1200&h=800&crop=1"}} style={{height:80 ,width:80 }} />
            <Image source={{uri:"https://www.thesun.co.uk/wp-content/uploads/2021/12/MT-SHOPPING-OFF-PLATT.jpg?strip=all&quality=100&w=1200&h=800&crop=1"}} style={{height:80 ,width:80 }} />
            <Image source={{uri:"https://www.thesun.co.uk/wp-content/uploads/2021/12/MT-SHOPPING-OFF-PLATT.jpg?strip=all&quality=100&w=1200&h=800&crop=1"}} style={{height:80 ,width:80 }} />
            <Image source={{uri:"https://www.thesun.co.uk/wp-content/uploads/2021/12/MT-SHOPPING-OFF-PLATT.jpg?strip=all&quality=100&w=1200&h=800&crop=1"}} style={{height:80 ,width:80 }} />
            <Text style={{textAlign:"center", fontSize:20, fontWeight:700, paddingTop:10}}>
              lingerie
            </Text>
            <Text style={{fontSize:17, fontWeight:200, marginRight:10, paddingTop:10, paddingLeft:30}}>New</Text>

            </View>
          </View>
        
          </View>
          <View style={{ elevation:5, borderWidth:1, marginHorizontal:5, borderRadius:5, overflow:"hidden", marginTop:5}}>
          <View  style={{height:220, width:170, flexDirection:"row"}}>
            <View style={{ height:220, width:170, flexDirection:"row", flexWrap:"wrap", gap:2}}>
            <Image source={{uri:"https://www.thesun.co.uk/wp-content/uploads/2021/12/MT-SHOPPING-OFF-PLATT.jpg?strip=all&quality=100&w=1200&h=800&crop=1"}} style={{height:80 ,width:80 }} />
            <Image source={{uri:"https://www.thesun.co.uk/wp-content/uploads/2021/12/MT-SHOPPING-OFF-PLATT.jpg?strip=all&quality=100&w=1200&h=800&crop=1"}} style={{height:80 ,width:80 }} />
            <Image source={{uri:"https://www.thesun.co.uk/wp-content/uploads/2021/12/MT-SHOPPING-OFF-PLATT.jpg?strip=all&quality=100&w=1200&h=800&crop=1"}} style={{height:80 ,width:80 }} />
            <Image source={{uri:"https://www.thesun.co.uk/wp-content/uploads/2021/12/MT-SHOPPING-OFF-PLATT.jpg?strip=all&quality=100&w=1200&h=800&crop=1"}} style={{height:80 ,width:80 }} />
            <Text style={{textAlign:"center", fontSize:20, fontWeight:700, paddingTop:10}}>
            watch
            </Text>
            <Text style={{fontSize:17, fontWeight:200, marginRight:10, paddingTop:10, paddingLeft:30}}>New</Text>

            </View>
          </View>
        
          </View>
          <View style={{ elevation:5, borderWidth:1, marginHorizontal:5, borderRadius:5, overflow:"hidden", marginTop:5}}>
          <View  style={{height:220, width:170, flexDirection:"row"}}>
            <View style={{ height:220, width:170, flexDirection:"row", flexWrap:"wrap", gap:2}}>
            <Image source={{uri:"https://www.thesun.co.uk/wp-content/uploads/2021/12/MT-SHOPPING-OFF-PLATT.jpg?strip=all&quality=100&w=1200&h=800&crop=1"}} style={{height:80 ,width:80 }} />
            <Image source={{uri:"https://www.thesun.co.uk/wp-content/uploads/2021/12/MT-SHOPPING-OFF-PLATT.jpg?strip=all&quality=100&w=1200&h=800&crop=1"}} style={{height:80 ,width:80 }} />
            <Image source={{uri:"https://www.thesun.co.uk/wp-content/uploads/2021/12/MT-SHOPPING-OFF-PLATT.jpg?strip=all&quality=100&w=1200&h=800&crop=1"}} style={{height:80 ,width:80 }} />
            <Image source={{uri:"https://www.thesun.co.uk/wp-content/uploads/2021/12/MT-SHOPPING-OFF-PLATT.jpg?strip=all&quality=100&w=1200&h=800&crop=1"}} style={{height:80 ,width:80 }} />
            <Text style={{textAlign:"center", fontSize:20, fontWeight:700, paddingTop:10}}>
            Hoodies
            </Text>
            <Text style={{fontSize:17, fontWeight:200, marginRight:10, paddingTop:10, paddingLeft:30}}>New</Text>

            </View>
          </View>
        
          </View>
          </View>
          </ScrollView>
         
    </View>
  )
}
