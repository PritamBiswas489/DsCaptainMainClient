import React from 'react';
import {View, FlatList} from 'react-native';
import {dashBoardData} from './data/data';
import GridItem from './gridItem';
import {styles} from '../dashBoard/gridItem/styles';
import {MoneyReceive, AllBooking, Services, Category, ServiceMen } from '@utils/icons';
import appColors from '@src/theme/appColors';
import { useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import { formatNumberWithAbbreviation } from '@src/config/utility';
import {useValues} from '../../../../../App';

type dashBoardType = {
  icon: React.ReactNode;
  name: string;
  count: any;
   
  darkIcon: React.ReactNode;
};
export const DashBoard = () => {
  const {currSymbol} = useValues()
  const {totalServiceMen, totalEarning, totalSubscribedServices, totalBookingServed}= useSelector((state: RootState)=>state['homeData'])
  const dashBoardData: Array<dashBoardType> = [ 
    { 
      icon:  <MoneyReceive />,
      name: 'newDeveloper.TotalEarning',
      count: currSymbol+formatNumberWithAbbreviation(totalEarning),
      darkIcon: <MoneyReceive color={appColors.primary} />,
    },
    {
      icon: <AllBooking />,
      name: 'newDeveloper.TotalBookingServed',
      count: totalBookingServed,
      darkIcon: <AllBooking color={appColors.primary} />,
    },
    { 
      icon: <ServiceMen />,
      name: 'newDeveloper.TotalServicemen',
      count: totalServiceMen, 
      darkIcon: <ServiceMen color={appColors.primary} />,
    },
    {
      icon: <Category height={'22'} width={'22'} />,
      name: 'newDeveloper.TotalSubscribedSubcategories',
      count: totalSubscribedServices,
      darkIcon: <Category color={appColors.primary} />,
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={dashBoardData}
        renderItem={({index, item}) => <GridItem item={item} />}
        numColumns={2}
      />
    </View>
  );
};
