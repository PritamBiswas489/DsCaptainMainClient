import React, { useEffect, useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 
import appColors from '@src/theme/appColors';
import {useValues} from '../../../App';
 
import {
    ServiceName,
    HomeIcon,
    SubCategory,
    Notes,
    Location,
    Experience,
    ServiceMen,
    Amount,
    Discount,
    ReceiptDiscount,
    Tags
  
  } from '@utils/icons';

interface Variant {
  name: string;
  price: string;
}

export default function VariantInput(
 {
    serviceVariants:variants,
    setServiceVariants:setVariants
 }:
 {
    serviceVariants:{ name: string, price: string }[],
    setServiceVariants:(value:{ name: string, price: string }[])=>void
 }
) {
  
  const {isDark, t} = useValues();
 
  //handle add variant
  const handleAddVariant = () => {
    setVariants([...variants, { name: '', price: '' }]);
  };

  //handle remove variant
  const handleRemoveVariant = (index: number) => {
    const newVariants = variants.filter((_, i) => i !== index);
    setVariants(newVariants);
  };

  //handle variant change
  const handleVariantChange = (index: number, key: keyof Variant, value: string) => {
    const newVariants = [...variants];
    newVariants[index][key] = value;
    setVariants(newVariants);
  };

    

  return (
    <View style={styles.container}>
      {variants.map((variant, index) => (
        <View key={index} style={styles.variantContainer}>
          <TextInput
            style={[styles.input,{color: isDark ? appColors.white : appColors.darkText},]}
            placeholder={t('newDeveloper.VariantName')}
            placeholderTextColor={appColors.lightText}
            value={variant.name}
            onChangeText={(text) => handleVariantChange(index, 'name', text)}
          />
          <TextInput
            style={[styles.input,{color: isDark ? appColors.white : appColors.darkText},]}
            placeholder={t('newDeveloper.VariantPrice')}
            placeholderTextColor={appColors.lightText}
            value={variant.price}
            keyboardType="numeric"
            onChangeText={(text) => handleVariantChange(index, 'price', text)}
          />
           <TouchableOpacity onPress={() => handleRemoveVariant(index)}>
            <Icon name="remove-circle-outline" size={24} color="red" />
          </TouchableOpacity> 
          
        </View>
      ))}
      <TouchableOpacity style={styles.addButton} onPress={handleAddVariant}>
        <Text style={styles.addButtonText}>+ Add Variant</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  variantContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    marginRight: 8,
    color: appColors.darkText,
  },
  addButton: {
    marginTop: 10,
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 4,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
