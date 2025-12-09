import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {GlobalStyle} from '@style/styles';
import {t} from 'i18next';
import {windowWidth} from '@theme/appConstant';
import {Experience, Location} from '@utils/icons';
import {DropdownWithIcon} from '@commonComponents/dropdownWithIcon';
import TextInputComponent from '@otherComponent/auth/textInput';
import {dropDownType, serviceTimeData} from '../data';
import {useValues} from '../../../../../../App';
import appColors from '@theme/appColors';

export function DetailContainer() {
  const [experience, setExperience] = useState('');
  const [serviceTime, setServiceTime] = useState<dropDownType | undefined>();
  const {isDark} = useValues();
  return (
    <View>
      <View style={styles.container}>
        <View
          style={[
            GlobalStyle.horizontalLine,
            {borderColor: isDark ? appColors.darkBorder : appColors.border},
          ]}
        />
        <Text
          style={[
            styles.noteContainer,
            {color: isDark ? appColors.white : appColors.darkText},
          ]}>
          {t('subscription.note')} : <Text>{t('timeSlots.note')}</Text>
        </Text>
      </View>

      <View
        style={[
          styles.mainView,
          {
            backgroundColor: isDark ? appColors.darkCard : appColors.boxBg,
            borderColor: isDark ? appColors.darkBorder : appColors.border,
          },
        ]}>
        <Text
          style={[
            styles.title,
            {color: isDark ? appColors.white : appColors.darkText},
          ]}>
          {t('timeSlots.bookingSlots')}
        </Text>
        <View style={styles.row}>
          <TextInputComponent
            inputStyle={[
              styles.containerView,
              {
                backgroundColor: isDark ? appColors.darkCard : appColors.white,
                borderColor: isDark ? appColors.darkBorder : appColors.border,
              },
            ]}
            placeholder={t('timeSlots.addGap')}
            Icon={<Experience />}
            value={experience}
            onChangeText={value => {
              setExperience(value);
            }}
            textContainerStyle={styles.textContainerStyle}
            containerStyle={{marginTop: windowWidth(2)}}
          />

          <DropdownWithIcon
            icon={<Location strokeWidth={1} />}
            data={serviceTimeData}
            label={'addNewService.hour'}
            onSelect={setServiceTime}
            dropdownStyle={[
              GlobalStyle.dropdown,
              styles.dropwnStyle,
              {
                backgroundColor: isDark ? appColors.darkCard : appColors.white,
                borderColor: isDark ? appColors.darkBorder : appColors.border,
              },
            ]}
            overlayStyle={GlobalStyle.overlayStyle}
            iconStyle={GlobalStyle.iconStyle}
            dropdownOptionStyle={[GlobalStyle.dropdownOptionStyle]}
          />
        </View>
      </View>
    </View>
  );
}
