import React, { useEffect } from 'react'
import { Alert, BackHandler, SafeAreaView, ScrollView, Text, View } from 'react-native'
import Profile from '../(components)/AccountPageComponent/Profile'

export default function accountpage() {

  useEffect(() => {
    const backAction = () => {
      Alert.alert(
        "Exit App",
        "Are you sure you want to exit?",
        [
          {
            text: "Cancel",
            onPress: () => null,
            style: "cancel"
          },
          {
            text: "YES",
            onPress: () => BackHandler.exitApp()
          }
        ]
      );
      return true; // prevents default back behavior
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove(); // cleanup on unmount
  }, []);
  return (
    <SafeAreaView>
      <ScrollView>
        <Profile/>
      </ScrollView>
    </SafeAreaView>
  )
}
