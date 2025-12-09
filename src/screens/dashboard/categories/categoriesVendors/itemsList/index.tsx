import React from 'react';
import {View, Text, FlatList, TouchableOpacity, Alert, Image} from 'react-native';
import {GlobalStyle} from '@style/styles';
import {categoriesData} from './data/data';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from 'src/navigation/types';
import {RightArrow} from '@utils/icons';
import {styles} from './styles';
import {useValues} from '../../../../../../App';
import appColors from '@theme/appColors';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';

type ItemsProps = NativeStackNavigationProp<RootStackParamList>;

export default function ItemsList({isGrid}: {isGrid: boolean}) {
  const {navigate} = useNavigation<ItemsProps>();
  const {isDark, t} = useValues();
  const {
    data: categoriesData,
  } = useSelector(
    (state: RootState) => state['vendorCategories']
  );

  return (
    <View style={[styles.container, isGrid && styles.mainVIew]}>
      <FlatList
        showsVerticalScrollIndicator={!isGrid && false}
        contentContainerStyle={!isGrid && styles.containerStyle}
        data={categoriesData}
        key={isGrid ? 'h' : 'v'}
        numColumns={isGrid ? 4 : 0}
        renderItem={({item}) =>
          isGrid ? (
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() =>navigate('SubCategories',{id:item.id.toString(),categoryname:item.name})}
              style={[
                !isGrid ? GlobalStyle.mainContainer : null,
                styles.gridStyle,
              ]}>
              <>
                <View
                  style={[
                    styles.iconContainer,
                    {
                      backgroundColor: isDark
                        ? appColors.darkCard
                        : appColors.boxBg,
                    },
                  ]}>
                    
                    <Image style={{width:50,height:50}} source={{uri:item.image_full_url}}
                    onError={(e) => {}}
                    onLoad={() => {} }
                    />
                </View>
                <Text style={[GlobalStyle.title, styles.textStyle]}>
                  {t(item.name)}
                </Text>
              </>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() =>navigate('SubCategories',{id:item.id.toString(),categoryname:item.name})}>
              <View style={styles.rowContainer}>
                <View style={[styles.row, {alignItems: 'center'}]}>
                  <View
                    style={[
                      styles.iconView,
                      {
                        backgroundColor: isDark
                          ? appColors.darkCard
                          : appColors.boxBg,
                      },
                    ]}>
                      <Image style={{width:50,height:50}} source={{uri:item.image_full_url}}
                    onError={(e) => {}}
                    onLoad={() => {} }
                    />
                     
                  </View>
                 
                  <Text
                    style={[
                      styles.titleStyle,
                      {color: isDark ? appColors.white : appColors.darkText},
                    ]}>
                    {t(item.name)}
                    
                  </Text>
                </View>
                <View>
                  <RightArrow />
                </View>
              </View>
            </TouchableOpacity>
          )
        }
        ItemSeparatorComponent={() =>
          !isGrid && (
            <View
              style={[
                GlobalStyle.horizontalLine,
                styles.separator,
                {borderColor: isDark ? appColors.darkBorder : appColors.border},
              ]}></View>
          )
        }
      />
    </View>
  );
}
