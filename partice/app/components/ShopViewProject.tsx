import React from 'react'
import { Image, Text, View } from 'react-native'

export default function ShopViewProject() {
  return (
    <View style={{flexDirection:"row", flexWrap:"wrap", gap:5, marginTop:10, justifyContent:"center", alignItems:"center"}}>
      {
        [{name:"Dresses"},{name:"Pants"},{name:"Skirts"},{name:"Shorts"},{name:"Jackets"},{name:"Hoddies"},{name:"Shirts"},{name:"Plolo"},{name:"T-Shirt"} ,{name:"Tunics"}].map((e,index)=>{
          return(<View key={index}>
            <View style={{padding:5, borderWidth:1, borderColor:"transparent", borderRadius:50, backgroundColor:"gray"}}>
        <Image  source={{
          uri:"https://images.unsplash.com/photo-1593696954577-ab3d39317b97?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D"
        }} style={{height:60,width:60, borderRadius:50}}/>
      </View>
      <Text style={{fontSize:12, textAlign:"center", fontWeight:700, letterSpacing:0.5, marginTop:2, color:"brown"}} >{e.name}</Text>
      </View>
    
          )
        })
      }
    </View>
  )
}
 