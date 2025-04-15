import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { Text, View ,Image, ScrollView } from 'react-native'

export default function TopProduct() {
  return (
       <View>
          <Text style={{marginTop:10, paddingLeft:10, fontSize:18, fontWeight:700}}> Top Products</Text>
        <ScrollView horizontal style={{marginTop:10, paddingLeft:15}}>
          {
            [1,2,3,4,5,6,7].map((e,index)=>{return(
              <Image key={index} source={{uri:"https://www.thesun.co.uk/wp-content/uploads/2021/12/MT-SHOPPING-OFF-PLATT.jpg?strip=all&quality=100&w=1200&h=800&crop=1"}} style={{height:60, width:60, borderRadius:50, marginLeft:15, borderColor:"blue", borderWidth:1}}/>
            )})
          }
        </ScrollView>
        </View>
  )
}
