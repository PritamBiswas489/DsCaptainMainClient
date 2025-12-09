import appColors from '@src/theme/appColors';
import { windowWidth } from '@src/theme/appConstant';
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Chip } from 'react-native-paper';
import { useValues } from '../../../../../../App';
 

interface VariantInputProps {
  variants: string[];
  onVariantsChange: (variants: string[]) => void;
  placeholderText:string
}

const VariantInput: React.FC<VariantInputProps> = ({ variants, onVariantsChange,placeholderText }) => {
  const [text, setText] = useState('');
  const { t, isDark } = useValues();

  const addVariant = () => {
    if (text.trim()) {
      onVariantsChange([...variants, text.trim().replace(' ','-')]);
      setText('');
    }
  };

  const removeVariant = (index: number) => {
    const newVariants = variants.filter((_, i) => i !== index);
    onVariantsChange(newVariants);
  };

  return (<>
    <View style={[styles.container]}>
      
      <TextInput
        style={[styles.input,{color: isDark ? appColors.white : appColors.darkText},{backgroundColor: isDark ? appColors.darkTheme : appColors.textInput}]}
        value={text}
        onChangeText={setText}
        onSubmitEditing={addVariant}
        placeholder={placeholderText}
        placeholderTextColor={isDark ? appColors.white : appColors.darkText}
      />
      <TouchableOpacity style={styles.addButton} onPress={addVariant}>
        <Text style={styles.addButtonText}>{t('newDeveloper.Add')}</Text>
      </TouchableOpacity>
    </View>
     <View style={[styles.container,{marginTop:10}]}>
     <View style={styles.variantsContainer}>
       {variants.map((variant, index) => (
         <Chip key={index} onClose={() => removeVariant(index)} style={styles.variant}>
           {variant}
         </Chip>
       ))}
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
    paddingHorizontal:windowWidth(5)
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

export default VariantInput;
