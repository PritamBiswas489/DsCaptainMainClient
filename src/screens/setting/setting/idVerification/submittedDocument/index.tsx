import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import {Menu, MenuItem, MenuDivider} from 'react-native-material-menu';
import {windowHeight} from '@theme/appConstant';
import {documents} from './data';
import {styles} from './styles';
import {Tick, MoreFillIcon, Pending} from '@utils/icons';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from 'src/navigation/types';
import appColors from '@theme/appColors';
import {useValues} from '../../../../../../App';

export function SubmittedDocument() {
  const {isDark,t} = useValues();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [selectedItem, setSelectedItem] = useState(null);
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuIndex, setMenuIndex] = useState(0);

  const hideMenu = () => {
    setMenuVisible(false);
    setSelectedItem(null);
  };

  const showMenu = (index: number) => {
    setMenuVisible(true);
    setMenuIndex(index);
  };

  const onPreview = (image: ImageSourcePropType) => {
    hideMenu();
    navigation.navigate('DocumentPreview', {image: image});
  };

  const onRequestUpdate = () => {
    console.log('Request update clicked');
    hideMenu();
  };

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>{t('idVerification.submitDocument')}</Text>
        <FlatList
          data={documents}
          renderItem={({item, index}) => (
            <View
              style={[
                styles.innerContainer,
                {borderColor: isDark ? appColors.darkBorder : appColors.border},
              ]}>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={[
                    styles.mainContainer,
                    {
                      backgroundColor: item.isPending
                        ? appColors.lightRed
                        : appColors.lightGreen,
                    },
                  ]}>
                  {item.isPending ? <Pending /> : <Tick />}
                </View>
                <View style={styles.textContainer}>
                  <Text
                    style={[
                      styles.name,
                      {color: isDark ? appColors.white : appColors.darkText},
                    ]}>
                    {t(item.name)}
                  </Text>
                  {item.documentId && (
                    <Text style={styles.documentId}>{t(item.documentId)}</Text>
                  )}
                  {item.isPending && (
                    <Text style={[styles.documentId, {color: appColors.error}]}>
                      {t('idVerification.requestPending')}
                    </Text>
                  )}
                </View>
              </View>
              <Menu
                style={{height: windowHeight(13)}}
                anchor={
                  <TouchableOpacity onPress={() => showMenu(index)}>
                    <MoreFillIcon
                      color={isDark ? appColors.white : appColors.darkText}
                    />
                  </TouchableOpacity>
                }
                visible={menuVisible && index === menuIndex}
                onRequestClose={hideMenu}>
                <MenuItem
                  onPress={() => onPreview(item.image)}
                  style={{paddingVertical: 8}}
                  textStyle={styles.textStyle}>
                  {t('idVerification.preview')}
                </MenuItem>
                <MenuDivider />
                <MenuItem
                  style={{paddingVertical: 8}}
                  textStyle={styles.textStyle}
                  onPress={onRequestUpdate}>
                  {t('idVerification.requestUpdate')}
                </MenuItem>
              </Menu>
            </View>
          )}
        />
      </View>
    </View>
  );
}
