import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const Route= useRouter();
  const gotologin=()=>{
    Route.navigate("/(auth)")
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"red",
        gap:30
      }}
    >
      <Text style={{color:"white", fontSize:30, fontWeight:500} }>Welcome</Text>
      <TouchableOpacity activeOpacity={0.8} style={{backgroundColor:"brown", paddingHorizontal:20,paddingVertical:10, borderRadius:20}} onPress={gotologin}>
        <Text style={{color:"white"}} >Click me !!</Text>
      </TouchableOpacity>
    </View>
  );
}
