import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {historyData} from './data';
import {CustomerSection} from './customerSection';
import {WalletSection} from './walletSection';
import {Arrow} from '@utils/icons';
import appColors from '@theme/appColors';
import {useValues} from '../../../../App';

export function WalletHistory() {
  const {isDark,t} = useValues();
  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        data={historyData}
        renderItem={({item}) => (
          <View
            style={[
              styles.container,
              {borderColor: isDark ? appColors.darkBorder : appColors.border},
            ]}>
            <CustomerSection item={item} />
            <WalletSection item={item} />
            <View style={styles.row}>
              <Text style={styles.textStyle}>{t('wallet.viewDetails')}</Text>
              <Arrow color={appColors.primary} width={'21'} />
            </View>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}
