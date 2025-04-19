
import { AntDesign, Entypo } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const categoriesData = {
  Clothing: ['Dresses', 'Pants', 'Skirts', 'Shorts', 'Jackets', 'Hoodies', 'Shirts', 'Polo', 'T-Shirts', 'Tunics'],
  Shoes: ['Dresses', 'Pants', 'Skirts', 'Shorts', 'Jackets', 'Hoodies', 'Shirts', 'Polo', 'T-Shirts', 'Tunics'],
  Bags: ['Dresses', 'Pants', 'Skirts', 'Shorts', 'Jackets', 'Hoodies', 'Shirts', 'Polo', 'T-Shirts', 'Tunics'],
  Lingerie: ['Dresses', 'Pants', 'Skirts', 'Shorts', 'Jackets', 'Hoodies', 'Shirts', 'Polo', 'T-Shirts', 'Tunics'],
  Accessories: ['Electr', 'Pants', 'Skirts', 'Shorts', 'Jackets', 'Hoodies', 'Shirts', 'Polo', 'T-Shirts', 'Tunics'],
  Just_for_You:['Dresses', 'Pants', 'Skirts', 'Shorts', 'Jackets', 'Hoodies', 'Shirts', 'Polo', 'T-Shirts', 'Tunics']
};

const DropDownCategories = () => {
  const [selectedGender, setSelectedGender] = useState('Female');
  const [expandedCategory, setExpandedCategory] = useState('Clothing');
  const[selectOptins,setSelectOptions]=useState(false);
  const handleExpand = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>All Categories</Text>
        <TouchableOpacity>
          <AntDesign name="close" size={24} />
        </TouchableOpacity>
      </View>

      <View style={styles.genderContainer}>
        {['All', 'Female', 'Male'].map((gender) => (
          <TouchableOpacity
            key={gender}
            style={[styles.genderButton, selectedGender === gender && styles.genderSelected]}
            onPress={() => setSelectedGender(gender)}
          >
            <Text style={selectedGender === gender ? styles.genderTextSelected : styles.genderText}>
              {gender}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      
      <ScrollView>
        {Object.entries(categoriesData).map(([category, subCategories]) => (
          <View key={category}>
            <TouchableOpacity style={styles.categoryRow} onPress={() => handleExpand(category)}>
              <Text style={styles.categoryTitle}>{category}</Text>
              <Entypo name={expandedCategory === category ? "chevron-up" : "chevron-down"} size={20} />
            </TouchableOpacity>

            {expandedCategory === category && subCategories.length > 0 && (
              <View style={styles.subCategoriesContainer}>
                {subCategories.map((sub, index) => (
                  <TouchableOpacity key={index} style={styles.subCategoryButton } >
                    <Text style={  styles.subCategoryText}>{sub}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        ))}


      </ScrollView>
    </View>
  );
};

export default DropDownCategories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 16,
  },
  genderButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginHorizontal: 6,
  },
  genderSelected: {
    backgroundColor: '#2e7bff',
    borderColor: '#2e7bff',
  },
  genderText: {
    color: '#000',
  },
  genderTextSelected: {
    color: '#fff',
  },
  categoryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  subCategoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 10,
  },
  subCategoryButton: {
    borderWidth: 1,
    borderColor: '#f4a4a4',
    borderRadius: 10,
    padding: 8,
    margin: 5,
  },
  subCategoryText: {
    fontSize: 14,
  },
  justForYou: {
    marginTop: 20,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  justForYouText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  options:{
    color:"red",
    backgroundColor:"blue"
  }
});
