import { Stack } from "expo-router";
import { SafeAreaView } from "react-native";
import { Provider } from "react-redux";
import  store  from "./redux/store";
import { PersistGate } from "redux-persist/es/integration/react";
// import { store } from "./redux/store";
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

export default function RootLayout() {
  return( <Provider store={store}>
    {/* <PersistGate persistor={persistor} > */}
    <SafeAreaView style={{flex:1}}>
      <Stack >
    <Stack.Screen name="index" options={{ headerShown: false}} />
    <Stack.Screen name="login"  options={{ headerShown: false}} />
    <Stack.Screen name="sipper"  options={{ headerShown: false}} />
    <Stack.Screen name="forGetPass"  options={{ headerShown: false}} />
    <Stack.Screen name="forGetPassEmail"  options={{ headerShown: false}} />
    <Stack.Screen name="(tabs)"  options={{ headerShown: false}} />
    <Stack.Screen name="Product_Detail"  options={{ headerShown: false}} />
    <Stack.Screen name="categories"  options={{ headerShown: false}} />
    <Stack.Screen name="See_All"  options={{ headerShown: false}} />
    <Stack.Screen name="See_All_Item"  options={{ headerShown: false}} />
  </Stack>
  </SafeAreaView>
  {/* </PersistGate> */}
  </Provider>)
  
}
