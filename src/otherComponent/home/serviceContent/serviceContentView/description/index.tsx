import {Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {fontSizes} from '@theme/appConstant';
import { useValues } from '../../../../../../App';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
export function ServiceDescription() {
  const [showReadMore, setReadMore] = useState(false);
  const {t} = useValues()
  const {
    selected:selectedDetailsData
  } = useSelector((state: RootState) => state['serviceDetailsData'])
  return (
    <Text style={styles.content}>
      {selectedDetailsData.description.replace(/<\/?[^>]+(>|$)/g, "")}
      {/* <TouchableOpacity activeOpacity={0.9} onPress={() => setReadMore(true)}>
        {!showReadMore && (
          <Text
            style={[
              styles.content,
              {textDecorationLine: 'underline', fontSize: fontSizes.FONT4},
            ]}>
            {t('serviceDetail.readMore')}
          </Text>
        )}
      </TouchableOpacity>
      {showReadMore && (
        <Text style={styles.content}>
          {' '}
          {'\n'}
          {t('serviceDetail.serviceContent')}
        </Text>
      )} */}
    </Text>
  );
}
