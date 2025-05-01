import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { Alert, BackHandler, SafeAreaView, ScrollView, Text, View, TouchableOpacity } from 'react-native';

export default function Setting() {
  const router = useRouter();

  const logout = async () => {
    try {
      await AsyncStorage.clear();
      // Replace current route so user cannot navigate back to settings
      router.replace('/login');
    } catch (error) {
      console.error('Error clearing AsyncStorage:', error);
    }
  };

  const checkToken = async () => {
    const token = await AsyncStorage.getItem('token');
    if (!token) {
      router.replace('/login');
    }
  };

  useEffect(() => {
    checkToken();

    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to exit the app?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        { text: 'YES', onPress: () => BackHandler.exitApp() },
      ]);
      return true; // prevent default back button action
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={{ paddingHorizontal: 10, fontSize: 18, fontWeight: 'bold', marginTop: 10 }}>Settings</Text>
        <View style={{ flex: 1, paddingHorizontal: 20, gap: 10, marginTop: 5 }}>
          <Text style={{ color: 'red', fontSize: 15, fontWeight: '300' }}>Login</Text>
          <Text style={{ color: '#87CEEB', fontSize: 15, fontWeight: '300' }}>Add Account</Text>
          <TouchableOpacity onPress={logout}>
            <Text style={{ color: 'red', fontSize: 16, fontWeight: '400' }}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
 // Customize behavior here. This example asks user to confirm app exit.