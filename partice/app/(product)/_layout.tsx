import { View } from 'react-native'
import { Tabs } from 'expo-router'
import React from 'react'
import { AntDesign, Feather, FontAwesome, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'

export default function _layout() {
  return (
    <Tabs>

            <Tabs.Screen  name='like' options={{ headerShown:false ,tabBarIcon: () => { return(
              
               <AntDesign size={30} color="red"/>
            )
            }}}/>
            <Tabs.Screen name='index'   options={{title:"Add to Cart",headerShown:false , tabBarIcon: () => { return(
              <View style={{height:34, width:80, backgroundColor:"red"}}>
                <MaterialCommunityIcons size={28} color="black" name='account' />
              </View>)
            }}}/>


    </Tabs>
  )
}
