import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {GlobalStyle} from '@style/styles';
import {Star} from '@utils/icons';
import appColors from '@theme/appColors';
import {useValues} from '../../../../../App';
import {windowWidth} from '@theme/appConstant';
import {ServiceDescription} from './description';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';

export default function ServiceContentView({
  isShowPrice,
}: {
  isShowPrice: boolean;
}) {
  const {currSymbol, currValue,t} = useValues();

  const {
    selected:selectedDetailsData
  } = useSelector((state: RootState) => state['serviceDetailsData'])


  return (
    <View>
      <View style={styles.contentView}>
        <View style={styles.row}>
          <View style={styles.rowContainer}>
            <View style={styles.row}>
              <Text style={[GlobalStyle.title, styles.titleStyle]}>
                {selectedDetailsData?.name}
              </Text>
              <View style={styles.verticalLine}></View>
              
            </View>
             
          </View>
        </View>
        <View style={styles.row}>
        <Text style={styles.content}>{selectedDetailsData?.category}</Text>
        {selectedDetailsData?.avg_rating > 0 && <Text style={styles.contentRating}> <Star height={'18'} /> {selectedDetailsData?.avg_rating.toFixed(1)}</Text>}
       <Text
         style={[
           GlobalStyle.title,
           styles.titleStyle,
           styles.priceStyle,
           {color: appColors.primary},
         ]}>
         {' '}
         {currSymbol}
         {parseFloat(selectedDetailsData?.min_bidding_price).toFixed(2)}
       </Text>

        </View>
        
      </View>
      <View style={GlobalStyle.mainContainer}>
        <ServiceDescription />
        {/* <View style={[styles.row, styles.containerStyle]}>
          <View
            style={[
              GlobalStyle.dot,
              {marginTop: windowWidth(3), marginHorizontal: windowWidth(2)},
            ]}></View>
          <Text style={styles.content}>{t('serviceDetail.detail')}</Text>
        </View> */}
      </View>
    </View>
  );
}
