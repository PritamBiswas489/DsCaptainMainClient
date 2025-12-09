import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {CheckIcon} from '@utils/icons';
import appColors from '@theme/appColors';
import {useValues} from '../../../../../../../App';

interface props {
  index: number;
  selectedItems: number[];
  handleItemPress: (index: number) => void;
}

export default function Selection({
  selectedItems,
  index,
  handleItemPress,
}: props) {
  const {isDark} = useValues();
  return (
    <View>
      <View style={styles.activeContainer}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => handleItemPress(index)}
          style={[
            styles.checkBox,
            {
              backgroundColor: selectedItems.includes(index)
                ? appColors.primary
                : appColors.white,
              borderColor: isDark ? appColors.darkBorder : appColors.border,
            },
          ]}>
          {selectedItems.includes(index) && (
            <CheckIcon width={'11'} height={'24'} color={appColors.white} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}
