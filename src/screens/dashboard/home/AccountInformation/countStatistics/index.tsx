import React from 'react';
import {View, FlatList} from 'react-native';
import {dashBoardData} from './data/data';
import GridItem from './gridItem';
import {styles} from '../countStatistics/gridItem/styles';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import { formatNumberWithAbbreviation } from '@src/config/utility';

export const CountStatistics = () => {
  const {owner} = useSelector((state: RootState)=>state['serviceProviderAccountData'])
  const {account} = owner
  const dashBoardData = [
    {
      name: 'newDeveloper.PayableBalance',
      amount:formatNumberWithAbbreviation(account.account_payable),
    },
    {
      name: 'newDeveloper.Receivablebalance',
      amount: formatNumberWithAbbreviation(account.account_receivable),
    },
    { 
      name: 'newDeveloper.Pendingwithdrawn',
      amount: formatNumberWithAbbreviation(account.balance_pending),
    },
    {
      name: 'newDeveloper.Alreadywithdrawn',
      amount: formatNumberWithAbbreviation(account.total_withdrawn),
    },
    {
      name: 'newDeveloper.Totalearning',
      amount: formatNumberWithAbbreviation(account.received_balance), 
    },
  ]
  return (
    <View style={styles.container}>
      <FlatList
        data={dashBoardData}
        renderItem={({index, item}) => <GridItem item={item} />}
        numColumns={3}
      />
    </View>
  );
};
