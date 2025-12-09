import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {categoriesList} from './data';
import {styles} from './styles';
import appColors from '@theme/appColors';
import {Cross, Plus} from '@utils/icons';
import {categoriesType} from '../categoriesModal/data/types';
import {useValues} from '../../../../App';

export function CategorySection({
  setShowModal,
  setSearchModal,
  moreCategoryData,
  selectedCategory,
  setSelectedCategory,
}: categoriesType) {
  const [categoryData, setCategoryData] = useState(categoriesList);
  const {isDark,t} = useValues();
  const handleCategory = (itemId: number, isShowMore: boolean) => {
    if (isShowMore) {
      setShowModal(false);
      setSearchModal(true);
    } else {
      if (selectedCategory.includes(itemId)) {
        setSelectedCategory((prevSelectedCategory: number[]) =>
          prevSelectedCategory.filter(id => id !== itemId),
        );
        setCategoryData(prevData =>
          prevData.map(category =>
            category.id === itemId
              ? {...category, showMoreSelected: false} // Assuming 'showMoreSelected' is a property indicating the "show more" category
              : category,
          ),
        );
      } else {
        setSelectedCategory([...selectedCategory, itemId]);
      }
    }
  };

  useEffect(() => {
    moreCategoryData && setCategoryData([...categoryData, ...moreCategoryData]);
  }, []);
  return (
    <View>
      <FlatList
        numColumns={3}
        data={categoryData}
        renderItem={({item, index}) => (
          <>
            {!item.showMoreSelected ? (
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => handleCategory(item.id, false)}
                style={[
                  styles.row,
                  {
                    backgroundColor: selectedCategory.includes(item.id)
                      ? appColors.border
                      : isDark
                      ? appColors.darkTheme
                      : appColors.white,
                    borderColor: isDark
                      ? appColors.darkBorder
                      : appColors.border,
                  },
                ]}>
                {selectedCategory.includes(item.id) ? (
                  <TouchableOpacity
                    onPress={() => handleCategory(item.id, false)}>
                    <Cross color={appColors.lightText} height={23} width={18} />
                  </TouchableOpacity>
                ) : (
                  <Plus
                    color={isDark ? appColors.white : appColors.darkText}
                    strokeWidth={'1.2'}
                    width={'21'}
                    height={'21'}
                  />
                )}
                {item.title && (
                  <Text
                    style={[
                      styles.textStyle,
                      {
                        color: selectedCategory.includes(item.id)
                          ? appColors.lightText
                          : isDark
                          ? appColors.white
                          : appColors.darkText,
                      },
                    ]}>
                    {t(item.title)}
                  </Text>
                )}
              </TouchableOpacity>
            ) : (
              !moreCategoryData && (
                <TouchableOpacity
                  onPress={() => handleCategory(item.id, true)}
                  activeOpacity={0.9}
                  style={[styles.row, styles.rowContainer]}>
                  <Plus
                    width={'21'}
                    height={'21'}
                    color={appColors.primary}
                    strokeWidth={'1.2'}
                  />
                  <Text style={[styles.textStyle, {color: appColors.primary}]}>
                    {t('packages.moreSelected')}
                  </Text>
                </TouchableOpacity>
              )
            )}
          </>
        )}
      />
    </View>
  );
}
