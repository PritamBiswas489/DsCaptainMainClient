import { RootState } from '@src/store';
import appColors from '@src/theme/appColors';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Ensure you have react-native-vector-icons installed
import { useSelector } from 'react-redux';
import { useValues } from '../../../../../App';
const StatusCard: React.FC = () => {
  const { todays_order_count, this_week_order_count, this_month_order_count } = useSelector(
    (state: RootState) => state['storeProfileData']
  );
  const { isDark, t } = useValues();
  return (
    <View style={styles.container}>
      <View style={styles.statusContainer}>
        <Text style={styles.statusLabel}>{t('newDeveloper.Today')}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Icon name="event" size={18} color="#fff" />
          <Text style={styles.statusValue}>{todays_order_count}</Text>

        </View>

      </View>
      <View style={styles.statusContainer}>
        <Text style={styles.statusLabel}>{t('newDeveloper.ThisWeek')}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Icon name="event" size={18} color="#fff" />
          <Text style={styles.statusValue}>{this_week_order_count}</Text>

        </View>
      </View>
      <View style={styles.statusContainer}>
        <Text style={styles.statusLabel}>{t('newDeveloper.ThisMonth')}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Icon name="event" size={18} color="#fff" />
          <Text style={styles.statusValue}>{this_month_order_count}</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: appColors.primary,
    paddingVertical: 4,
    borderRadius: 8,
  },
  statusContainer: {
    alignItems: 'center',
  },
  statusLabel: {
    color: '#fff',
    marginBottom: 4,
    fontSize: 16,
  },
  statusValue: {
    color: '#fff',
    fontSize: 14,
    marginLeft: 4,
    fontWeight: 'bold',
  },
});

export default StatusCard;
