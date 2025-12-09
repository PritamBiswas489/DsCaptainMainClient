import appColors from '@src/theme/appColors';
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { RadioButton, Checkbox, IconButton } from 'react-native-paper';
import { useValues } from '../../../../../../App';
import { windowHeight, windowWidth } from '@src/theme/appConstant';
import { foodVariations } from '@src/interfaces/store/foodVariations.interface';
import { foodVariationOption } from '@src/interfaces/store/foodVariations.interface';

interface Option {
  name: string;
  price: string;
}

//Food variation
export const FoodVariation = (
  {
  foodVariation,
  foodVariationIndex ,
  updateVaritionsState,
  removeVariationFromState
}:{
  foodVariation:foodVariations,
  foodVariationIndex:number ,
  updateVaritionsState:(dt:any,index:number)=>void
  removeVariationFromState:(index:number)=>void
}) => {
  const [name, setName] = useState(foodVariation.name);
  const [isRequired, setIsRequired] = useState(foodVariation.required === 'on' ? true : false);
  const [type, setType] = useState(foodVariation.type);
  const [options, setOptions] = useState<foodVariationOption[]>(foodVariation.values);
  const [minimumValue,setMinimumValue] = useState('')
  const [maximumValue,setMaximumValue] = useState('')
  const { t, isDark } = useValues();

  const addOption = () => {
    setOptions([...options, { label: '', optionPrice: '' }]);
  };

  const removeOption = (index: number) => {
    setOptions(options.filter((_, i) => i !== index));
  };

  const handleOptionChange = (index: number, field: keyof foodVariationOption, value: string) => {
    const newOptions = [...options];
    newOptions[index][field] = value;
    setOptions(newOptions);
  };

  useEffect(()=>{
    updateVaritionsState({
      name,
      isRequired,
      type,
      options,
      minimumValue,
      maximumValue
    },foodVariationIndex)
  },[name,isRequired,type,options,minimumValue,maximumValue])

  return (
    <View style={styles.container}>
      <View style={{ position: 'absolute', right: 0, top: -10 }}>
        <IconButton
          icon="close"
          size={20}
          iconColor="red"
          onPress={() => removeVariationFromState(foodVariationIndex)}
        />
      </View>
      <View style={[styles.row, { marginTop: 10 }]}>
        <TextInput
          style={[styles.input, {
            borderColor: isDark
              ? appColors.darkBorder
              : appColors.border,

            color: isDark ? appColors.white : appColors.darkText,
            backgroundColor: isDark ? appColors.darkTheme : appColors.textInput
          }]}
          placeholder={t('newDeveloper.Variantname')}
          value={name}
          placeholderTextColor={isDark ? appColors.white : appColors.darkText}
          onChangeText={setName}
        />
        <Checkbox
          status={isRequired ? 'checked' : 'unchecked'}
          onPress={() => setIsRequired(!isRequired)}
        />
        <Text style={[styles.label, { color: isDark ? appColors.white : appColors.darkText }]}>{t('newDeveloper.Required')}</Text>
      </View>
      {/* select single and multiple option */}
      <View style={styles.row}>
        <RadioButton.Group onValueChange={newValue => setType(newValue)} value={type}>
          <View style={styles.radioContainer}>
            <View style={styles.radioButton}>
              <RadioButton value="single" />
              <Text style={[styles.label, { color: isDark ? appColors.white : appColors.darkText }]}>{t('newDeveloper.Single')}</Text>
            </View>
            <View style={styles.radioButton}>
              <RadioButton value="multi" />
              <Text style={[styles.label, { color: isDark ? appColors.white : appColors.darkText }]}>{t('newDeveloper.Multiple')}</Text>
            </View>
          </View>
        </RadioButton.Group>
      </View>
      {/* when type is mutiple this panel will show */}
      { type === 'multi' && <View style={styles.panel}>
        <View style={styles.optionRow}>
          {/* Minimum value */}
          <TextInput
            style={[styles.optionInput, {
              borderColor: isDark
                ? appColors.darkBorder
                : appColors.border,
              color: isDark ? appColors.white : appColors.darkText,
              backgroundColor: isDark ? appColors.darkTheme : appColors.textInput
            }]}
            placeholder={t('newDeveloper.Minimum')}
            placeholderTextColor={isDark ? appColors.white : appColors.darkText}
            value={minimumValue}
            onChangeText={(value) => { setMinimumValue(value) }}
            keyboardType="numeric"
          />
          {/* Maximum value */}
          <TextInput
            style={[styles.optionInput, {
              borderColor: isDark
                ? appColors.darkBorder
                : appColors.border,
              color: isDark ? appColors.white : appColors.darkText,
              backgroundColor: isDark ? appColors.darkTheme : appColors.textInput
            }]}
            placeholder={t('newDeveloper.Maximum')}
            placeholderTextColor={isDark ? appColors.white : appColors.darkText}
            value={maximumValue}
            onChangeText={(value) => { setMaximumValue(value) }}
            keyboardType="numeric"
          />
        </View>
      </View> }
      
      <View style={styles.panel}>

        {options.map((option, index) => (
          <View key={index} style={styles.optionRow}>
            <TextInput
              style={[styles.optionInput, {
                borderColor: isDark
                  ? appColors.darkBorder
                  : appColors.border,
                color: isDark ? appColors.white : appColors.darkText,
                backgroundColor: isDark ? appColors.darkTheme : appColors.textInput
              }]}
              placeholder={t('newDeveloper.OptionName')}
              placeholderTextColor={isDark ? appColors.white : appColors.darkText}
              value={option.label}
              onChangeText={text => handleOptionChange(index, 'label', text)}
            />
            <TextInput
              style={[styles.optionInput, {
                borderColor: isDark
                  ? appColors.darkBorder
                  : appColors.border,
                color: isDark ? appColors.white : appColors.darkText,
                backgroundColor: isDark ? appColors.darkTheme : appColors.textInput
              }]}
              placeholder={t('newDeveloper.Price')}
              value={option.optionPrice}
              onChangeText={text => handleOptionChange(index, 'optionPrice', text)}
              placeholderTextColor={isDark ? appColors.white : appColors.darkText}
              keyboardType="numeric"
            />
            {index > 0 && <IconButton
              icon="close"
              size={20}
              iconColor="red"
              onPress={() => removeOption(index)}
            />}
          </View>
        ))}
        <TouchableOpacity style={styles.addButton} onPress={addOption}>
          <Text style={styles.addButtonText}>{t('newDeveloper.AddOption')}</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 1,
    borderColor: appColors.primary
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    flex: 1,
    marginRight: 10,
    borderRadius: 4
  },
  label: {
    marginLeft: 5,
  },
  panel: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: appColors.primary,
    paddingHorizontal: windowWidth(2),
    paddingVertical: windowHeight(2)
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  optionInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    flex: 1,
    marginRight: 10,
    borderRadius: 4
  },
  addButton: {
    borderWidth: 1,
    borderColor: appColors.primary,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: 'transparent',
  },
  addButtonText: {
    color: appColors.primary,
  },
});


