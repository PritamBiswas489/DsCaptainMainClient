import React, {memo} from 'react';
import {View, TouchableOpacity, Alert} from 'react-native';
import {  useState } from 'react';
import {Plus, Search} from '@utils/icons';
import Header from '@commonComponents/header';
import SearchBar from '../home/searchBar';
import appColors from '@theme/appColors';
import {useValues} from '../../../App';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import { serviceMenDataAction } from '@src/store/redux/servicemen-list';
import { serviceMenSearchFieldActions } from '@src/store/redux/servicemen-search-field';

const  HeaderView =  ({
  title,
  gotoScreen,
  setSearchValue,
  setclickSearchButton,
  trailIcon,
  showBackArrow
}: {
  title: string,
  gotoScreen: any,
  setSearchValue:(value:string)=>void,
  setclickSearchButton:(value:boolean)=>void,
  trailIcon?: React.ReactNode
  showBackArrow?:boolean

}) => {
  const {isDark} = useValues();

  const {
    searchValue 
  } = useSelector((state: RootState) => state['serviceMenSearchField'])

  const handleSetSearchValue = () =>{
    if(searchValue.trim()!==''){
      setSearchValue(searchValue)
    }else{
      setSearchValue('none')
    }
   
    setclickSearchButton(true)
  } 
 

//  console.log("=========== header rendering =======================")
  return (
    <View>
      <Header
        showBackArrow={showBackArrow}
        title={title}
        trailIcon={
          trailIcon
          // <Plus
          //   color={isDark ? appColors.white : appColors.darkText}
          //   height={'20'}
          //   width={'20'}
          // />
        }
        gotoScreen={gotoScreen}
        content={
          <TouchableOpacity activeOpacity={0.9} onPress={handleSetSearchValue}>
            <SearchBar handleSetSearchValue={handleSetSearchValue} searchIcon={<Search />} />
          </TouchableOpacity>
        }
      />
    </View>
  );
}

export default memo(HeaderView)
