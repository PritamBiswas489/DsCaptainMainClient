import {
  View,
  Text,
  Image,
  TouchableOpacity,
  GestureResponderEvent,
  Alert,
} from 'react-native';
import React, {FormEvent} from 'react';
import {styles} from './styles';
import {balanceBackground} from '@utils/images';
import {useValues} from '../../../../App';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import { formatNumberWithAbbreviation } from '@src/config/utility';
export function TotalBalance({
  onPress,
}: {
  onPress: (props: FormEvent<HTMLFormElement> | undefined) => void;
}) {
  
  const {currSymbol, currValue,t} = useValues();
  const {owner} = useSelector((state: RootState)=>state['serviceProviderAccountData'])
  const {account} = owner
  return (
    <View style={styles.container}>
      <View>
        <Image source={balanceBackground} style={styles.imageStyle} />
        <View style={styles.innerContainer}>
          <Text style={styles.textStyle}>{t('home.totalBalance')} :</Text>
          <Text style={styles.price}>
            {currSymbol}
            {formatNumberWithAbbreviation(account.account_payable)}
          </Text>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={
              onPress as unknown as (event: GestureResponderEvent) => void
            }
            style={styles.containerView}>
            <Text style={styles.text}>{t('newDeveloper.PayNow')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
