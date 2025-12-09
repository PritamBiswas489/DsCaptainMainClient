import React from 'react';
import {View} from 'react-native';
import {GlobalStyle} from '@style/styles';
import CancelHeader from '@commonComponents/cancelHeader';
import Title from '@commonComponents/title';
import {CategorySection} from '../categorySection';
import {moreCategory} from './data';
import {windowHeight} from '@theme/appConstant';
import {SearchBar} from '@otherComponent/home';
import {Search} from '@utils/icons';
import {styles} from './styles';
import {searchModalType} from './data/types';
import {useValues} from '../../../../App';
import appColors from '@theme/appColors';

export function CategoriesModal({
  setShowModal,
  setSearchModal,
  selectedCategory,
  setSelectedCategory,
}: searchModalType) {
  const {isDark} = useValues();
  return (
    <View
      style={[
        GlobalStyle.modal,
        {backgroundColor: isDark ? appColors.darkCard : appColors.white},
      ]}>
      <CancelHeader
        title={'serviceList.categories'}
        leftTitle={'booking.done'}
        gotoScreen={() => {
          setSearchModal(false);
        }}
        onButtonClick={() => {
          setSearchModal(false);
          setShowModal(true);
        }}
      />
      <Title
        titleStyle={{marginTop: windowHeight(3)}}
        title="addNewService.selectCategory"
      />
      <SearchBar
        containerStyle={styles.container}
        searchIcon={<Search height={'18'} width={'18'} />}
      />
      <CategorySection
        moreCategoryData={moreCategory}
        setShowModal={setShowModal}
        setSearchModal={setSearchModal}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <View style={styles.blankView}></View>
    </View>
  );
}
