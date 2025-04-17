import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack >
    <Stack.Screen name="index" options={{ headerShown: false}} />
    <Stack.Screen name="login"  options={{ headerShown: false}} />
    <Stack.Screen name="sipper"  options={{ headerShown: false}} />
    <Stack.Screen name="signup"  options={{ headerShown: false}} />
    <Stack.Screen name="forGetPass"  options={{ headerShown: false}} />
    <Stack.Screen name="forGetPassEmail"  options={{ headerShown: false}} />
    <Stack.Screen name="(tabs)"  options={{ headerShown: false}} />
  </Stack>
}
