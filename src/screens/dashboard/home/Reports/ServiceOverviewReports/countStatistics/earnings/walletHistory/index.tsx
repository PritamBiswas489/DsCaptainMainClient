import {View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import HeadingRow from '@commonComponents/headingRow';
import RenderItem from './renderItem';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from 'src/navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type routeProps = NativeStackNavigationProp<RootStackParamList>;

export default function History() {
  const {navigate} = useNavigation<routeProps>();
  return (
    <View style={styles.container}>
      <HeadingRow
        title="common.history"
        content="home.viewAll"
        rowStyle={styles.rowStyle}
        gotoScreen={() => navigate('History')}
      />
      <RenderItem />
    </View>
  );
}
