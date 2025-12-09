import React from 'react';
import {FlatList, Text, TouchableOpacity, Modal, View} from 'react-native';
import {styles} from './styles';
import {propsType} from './types';
import {optionType} from './types';
import App, {useValues} from '../../../App';
import appColors from '@theme/appColors';

export function CustomModal({
  visible,
  setVisible,
  data,
  getSelected,
}: propsType) {
  const onItemPress = (item: number) => {
    getSelected(item);
    setVisible(false);
  };

  const renderItem = ({item, index}: {item: optionType; index: number}) => {
    return (
      <TouchableOpacity style={styles.item} onPress={() => onItemPress(index)}>
        <Text
          style={[
            styles.label,
            {color: isDark ? appColors.white : appColors.darkText},
          ]}>
          {t(item.name)}
        </Text>
      </TouchableOpacity>
    );
  };

  const {isDark,t} = useValues();

  const renderDropdown = () => {
    return (
      <Modal visible={visible} transparent animationType="none">
        <TouchableOpacity
          style={styles.modalContainer}
          onPress={() => setVisible(false)}
          activeOpacity={1}>
          <TouchableOpacity style={styles.overlay} activeOpacity={1}>
            <View
              style={[
                styles.dropdown,
                {
                  backgroundColor: isDark
                    ? appColors.darkText
                    : appColors.white,
                },
              ]}>
              <FlatList
                ItemSeparatorComponent={() => (
                  <View
                    style={[
                      styles.separator,
                      {
                        backgroundColor: isDark
                          ? appColors.darkBorder
                          : appColors.border,
                      },
                    ]}
                  />
                )}
                data={data}
                renderItem={renderItem}
                keyExtractor={index => index.toString()}
              />
            </View>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    );
  };
  return <View>{renderDropdown()}</View>;
}
export default CustomModal;
