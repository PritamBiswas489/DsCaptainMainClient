import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import appColors from '@theme/appColors';
import {Plus} from '@utils/icons';
import {CategorySection} from '@otherComponent/index';
import {addCategoryType} from './types';
import {useValues} from '../../../../../../../App';

export function AddCategory({
  setShowModal,
  setSearchModal,
  selectedCategory,
  setSelectedCategory,
  containerStyle,
}: addCategoryType) {
  const [categoryInput, setCategoryInput] = useState<string>('');
  const {isDark, t} = useValues();
  return (
    <View style={[styles.container, containerStyle]}>
      <View
        style={[
          styles.inputContainer,
          {backgroundColor: isDark ? appColors.darkTheme : appColors.textInput},
        ]}>
        <TextInput
          style={[
            styles.inputStyle,
            {color: isDark ? appColors.white : appColors.darkText},
          ]}
          placeholder={t('packages.addMoreService')}
          placeholderTextColor={appColors.lightText}
          onChangeText={text => setCategoryInput(text)}
          value={categoryInput}
        />
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            setShowModal(false);
            setSearchModal(true);
          }}
          style={styles.addContainer}>
          <Plus color={appColors.white} />
        </TouchableOpacity>
      </View>
      <View>
        <CategorySection
          setShowModal={setShowModal}
          setSearchModal={setSearchModal}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </View>
    </View>
  );
}
