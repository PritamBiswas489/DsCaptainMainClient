import { View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import HeadingRow from '@commonComponents/headingRow';
import { PopularService } from '../../popularService';
import { ActiveServiceMen } from '../../activeServicemen';
import { popularService as initialPopularService } from '../../popularService/data/data';
import { RootStackParamList } from 'src/navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { useValues } from '../../../../../../App';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import { serviceMenType } from '../../activeServicemen/data/types';
import { HomeMySubscriptions } from '../../homeMySubscriptions';
import HomeNoFataFound from '@src/commonComponents/homeNoDataFound';

type navigationProp = NativeStackNavigationProp<RootStackParamList>;

export function ProviderLogin() {
  const [popularService, setPopularService] = useState(initialPopularService);
  const { navigate } = useNavigation<navigationProp>();
  const { isFreelancerLogin, t } = useValues();


  const {
    serviceMenData: ServiceMenList,
  } = useSelector((state: RootState) => state['homeData'])

  //console.log(ServiceMenList)



  return (
    <View>
      <HeadingRow
        gotoScreen={() => navigate('MySubscriptions', { id: undefined })}
        title={'newDeveloper.MySubscriptions'}
        content={'home.viewAll'}
      />
      <HomeMySubscriptions
        data={popularService}
        setData={setPopularService}
        isHorizontal={true}
      />


      <>
        <HeadingRow
          rowStyle={{ marginTop: 0 }}
          title={'home.activeServiceMen'}
          content={'home.viewAll'}
          gotoScreen={() => navigate('ServiceMenList')}
        />
        {ServiceMenList.length === 0 && <HomeNoFataFound message={t('newDeveloper.homeServiceMenFound')} />}
        {ServiceMenList.length > 0 && <ActiveServiceMen data={ServiceMenList} />}
      </>

    </View>
  );
}
