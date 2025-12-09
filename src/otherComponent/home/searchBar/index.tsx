import React, { memo } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  GestureResponderEvent,
  Alert,
} from 'react-native';
import {styles} from './styles';
import appColors from '@theme/appColors';
import {Filter} from '@assets/icons/home/filter';
import {GlobalStyle} from '@style/styles';
import {useValues} from '../../../../App';
import {searchType} from './types';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import { serviceMenSearchFieldActions } from '@src/store/redux/servicemen-search-field';
 

const  SearchBar = ({
  containerStyle,
  inputContainerStyle,
  showFilter,
  gotoScreen,
  searchIcon,
  textInputSize,
  handleSetSearchValue
   
   
}: searchType)=> {
  const {isDark,t} = useValues();
  const dispatch = useDispatch()

  const {
    searchValue 
  } = useSelector((state: RootState) => state['serviceMenSearchField'])

   const setValue2 = (value:string)=>{
    dispatch(serviceMenSearchFieldActions.setData({
      field: 'searchValue',
      data: value
    }))
     
  }

  return (
    <View
      style={[
        styles.rowContainer,
        styles.textInput,
        styles.margin,
        containerStyle,
        {
          backgroundColor: isDark ? appColors.darkTheme : appColors.white,
          borderWidth: isDark ? 1 : 1.3,
          borderColor: isDark ? appColors.darkBorder : appColors.border,
        },
      ]}>
      {searchIcon}
      <TextInput
        placeholderTextColor={appColors.lightText}
        placeholder={t('servicemen.search')}
        style={[
          styles.inputStyle,
          inputContainerStyle,
          {
            fontSize: textInputSize,
            color: isDark ? appColors.white : appColors.darkText,
          },
        ]}
        value={searchValue}
        
        onChangeText={value => {
          setValue2(value);
          
        }}
        onSubmitEditing={()=>{
          handleSetSearchValue()
        }}
      />
      {showFilter && (
        <View style={styles.rowContainer}>
          <View style={GlobalStyle.verticalLine}></View>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={
              ()=>{
                Alert.alert('dsdd  d sdsddsdsdsdd')
              }
            }>
            <Filter />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
export default memo(SearchBar)