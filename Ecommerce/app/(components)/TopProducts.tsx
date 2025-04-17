import React, { useState } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

export default function TopProduct() {
  const [selectedIndex, setSelectedIndex] = useState(false);

  const products = [1, 2, 3, 4, 5, 6, 7];

  return (
    <View style={{ marginTop: 10 }}>
      <Text style={{ paddingLeft: 10, fontSize: 18, fontWeight: '700' }}>
        Top Products
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 10, paddingLeft: 10 }}
      >
        {products.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectedIndex(true)}
            style={{
              marginRight: 15,
              borderRadius: 60,
              padding: 3,
              borderWidth: 2,
              borderColor: selectedIndex? '#ff4081' : '#2196f3',
              backgroundColor: selectedIndex? '#e3f2fd' : '#fff',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 3,
              elevation: 5,
            }}
          >
            <Image
              source={{
                uri: 'https://www.thesun.co.uk/wp-content/uploads/2021/12/MT-SHOPPING-OFF-PLATT.jpg?strip=all&quality=100&w=1200&h=800&crop=1',
              }}
              style={{
                height: 60,
                width: 60,
                borderRadius: 50,
              }}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
