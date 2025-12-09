import React, {ReactNode} from 'react';
import {View, StyleSheet} from 'react-native';
import {windowHeight} from '@theme/appConstant';
import appColors from '@theme/appColors';

interface childrenProps {
  content: ReactNode;
}

export default function BoxContainer({content}: childrenProps) {
  return <View style={styles.container}>{content}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.boxBg,
    borderBottomLeftRadius: windowHeight(3),
    borderBottomRightRadius: windowHeight(3),
    paddingBottom: windowHeight(3.5),
    borderWidth: 1,
    borderColor: appColors.border,
    elevation: 0.5,
  },
});
