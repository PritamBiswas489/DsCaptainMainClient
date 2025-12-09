import React from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
} from 'react-native';
import { NewService, NewServiceMen, SettingIcon, Microphone } from '@utils/icons';
import { styles } from './styles';
import appColors from '@theme/appColors';
import { useValues } from '../../../App';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from 'src/navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons'; // Importing Ionicons for the close button

type routeProps = NativeStackNavigationProp<RootStackParamList>;

const StoreCartModal = ({ visible, onClose, setModalVisible }: any) => {
  const { isDark, t } = useValues();
  const { navigate } = useNavigation<routeProps>();

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="none"
      onRequestClose={onClose}>
      
      <View style={styles.modalContainer}>
        <View
          style={[
            styles.modalContent,
            { backgroundColor: isDark ? appColors.darkCard : appColors.white },
          ]}>
          
          {/* Close Button */}
          <TouchableOpacity
            style={styles.closeButton}
            onPress={onClose}>
            <Icon name="close" size={24} color={isDark ? appColors.white : appColors.darkText} />
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => {
              setModalVisible(false), navigate('StoreSettings');
            }}
            style={styles.container}>
            <View
              style={[
                styles.mainView,
                {
                  backgroundColor: isDark
                    ? appColors.darkTheme
                    : appColors.boxBg,
                },
              ]}>
              <SettingIcon />
            </View>
            <Text
              style={[
                styles.textStyle,
                { color: isDark ? appColors.white : appColors.darkText },
              ]}>
              {t('newDeveloper.StoreSettings')}
            </Text>
          </TouchableOpacity>

          <View style={styles.separator} />

          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => {
              setModalVisible(false), navigate('StoreUpdateAnnouncement');
            }}
            style={styles.container}>
            <View
              style={[
                styles.mainView,
                {
                  backgroundColor: isDark
                    ? appColors.darkTheme
                    : appColors.boxBg,
                },
              ]}>
              <Microphone />
            </View>
            <Text
              style={[
                styles.textStyle,
                { color: isDark ? appColors.white : appColors.darkText },
              ]}>
              {t('newDeveloper.UpdateAnnouncement')}
            </Text>
          </TouchableOpacity>

          <View style={styles.separator} />

          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => {
              setModalVisible(false), navigate('ListItem');
            }}
            style={[styles.container]}>
            <View
              style={[
                styles.mainView,
                {
                  backgroundColor: isDark
                    ? appColors.darkTheme
                    : appColors.boxBg,
                },
              ]}>
              <NewServiceMen />
            </View>
            <Text
              style={[
                styles.textStyle,
                { color: isDark ? appColors.white : appColors.darkText },
              ]}>
              {t('newDeveloper.StoreItems')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default StoreCartModal;
