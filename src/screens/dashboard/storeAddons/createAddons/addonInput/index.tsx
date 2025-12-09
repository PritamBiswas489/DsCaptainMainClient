import appColors from '@src/theme/appColors';
import { windowWidth } from '@src/theme/appConstant';
import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Chip } from 'react-native-paper';
import { useValues } from '../../../../../../App';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';


interface VariantInputProps {
  selectedaddons: string[];
  removeSelectedAddon:(id:string)=>void

}

const AddonInput: React.FC<VariantInputProps> = ({ selectedaddons, removeSelectedAddon }) => {
  const [text, setText] = useState('');
  const { t, isDark } = useValues();

  const {
    data: vendorAddOnList,
  } = useSelector(
    (state: RootState) => state['vendorAddons']
  );

  // const removeVariant = (index: number) => {
  //   const newVariants = variants.filter((_, i) => i !== index);
  //   onVariantsChange(newVariants);
  // };

  return (
    <>
      <View style={[styles.container]}>
        <View style={styles.variantsContainer}>
          {selectedaddons.map((addOn, index) => {
           const findindex= vendorAddOnList.findIndex(ele=>ele.id === parseInt(addOn)) 
           const addOneName = vendorAddOnList?.[findindex]?.name
           return  <Chip key={index} onClose={() => removeSelectedAddon(addOn)} style={styles.variant}>
              {addOneName}
            </Chip>
          })}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    paddingHorizontal: windowWidth(5)
  },
  variantsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
  },
  variant: {
    margin: 4,
  },
  input: {
    flex: 1,
    padding: 8,
    borderRadius: 4,

  },
  addButton: {
    backgroundColor: appColors.primary,
    padding: 10,
    borderRadius: 4,
    marginLeft: 8,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default AddonInput;
