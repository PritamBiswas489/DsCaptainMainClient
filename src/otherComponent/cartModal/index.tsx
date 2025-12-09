import React from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
} from 'react-native';
import { NewService, NewServiceMen } from '@utils/icons';
import { styles } from './styles';
import appColors from '@theme/appColors';
import { useValues } from '../../../App';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from 'src/navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons'; // Importing Ionicons for the close button

type routeProps = NativeStackNavigationProp<RootStackParamList>;

const CartModal = ({ visible, onClose, setModalVisible }: any) => {
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
              setModalVisible(false), navigate('AddNewServiceSubCategory');
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
              <NewService />
            </View>
            <Text
              style={[
                styles.textStyle,
                { color: isDark ? appColors.white : appColors.darkText },
              ]}>
              {t('newDeveloper.addNewSubcategory')}
            </Text>
          </TouchableOpacity>

          <View style={styles.separator} />

          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => {
              setModalVisible(false), navigate('AddNewService');
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
              <NewService />
            </View>
            <Text
              style={[
                styles.textStyle,
                { color: isDark ? appColors.white : appColors.darkText },
              ]}>
              {t('addNewService.title')}
            </Text>
          </TouchableOpacity>

          <View style={styles.separator} />

          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => {
              setModalVisible(false), navigate('AddNewServiceMen');
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
              {t('addNewService.newServiceMen')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CartModal;
