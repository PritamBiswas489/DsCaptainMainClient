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

export default function BookingServiceContentView({
  serviceName,
  isShowPrice,
}: {
  serviceName:string;
  isShowPrice: boolean;
}) {
  const {currSymbol, currValue,t} = useValues();

  const {
    selected:selectedDetailsData
  } = useSelector((state: RootState) => state['serviceDetailsData'])


  return (
    <View style={{marginTop:2}}>
      <View style={styles.contentView}>
        <View style={styles.row}>
          <View style={styles.rowContainer}>
            <View style={styles.row}>
              <Text style={[GlobalStyle.title, styles.titleStyle]}>
                {serviceName}
              </Text>
              <View style={styles.verticalLine}></View>
              
            </View>
             
          </View>
        </View>
         
        
      </View>
       
    </View>
  );
}
