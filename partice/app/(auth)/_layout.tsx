import { Stack } from "expo-router";

export default function _layout() {
  return (
     <Stack >
        <Stack.Screen name="index" options={{ headerShown: false}} />
        <Stack.Screen name="secondPage" options={{ headerShown: false}} />
        <Stack.Screen name="thirdPage" options={{ headerShown: false}} />
        <Stack.Screen name="fourPage" options={{ headerShown: false}} />
        <Stack.Screen name="fivePage" options={{ headerShown: false}} />
        <Stack.Screen name="sixPage" options={{ headerShown: false}} />
        <Stack.Screen name="sevenPage" options={{ headerShown: false}} />
        <Stack.Screen name="eightPage" options={{ headerShown: false}} />
        <Stack.Screen name="ninePage" options={{ headerShown: false}} />
        
      </Stack>
  )
}
