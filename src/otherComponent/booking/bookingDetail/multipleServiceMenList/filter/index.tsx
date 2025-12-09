import React, {useState} from 'react';
import {View} from 'react-native';
import {GlobalStyle} from '@style/styles';
import CancelHeader from '@commonComponents/cancelHeader';
import Title from '@commonComponents/title';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {RatingSection} from '@otherComponent/ratingSection';
import GradientBtn from '@commonComponents/gradientBtn';
import {Experience} from '@utils/icons';
import {experienceOptions} from './data';
import {useValues} from '../../../../../../App';
import appColors from '@theme/appColors';
import {DropdownWithIcon} from '@commonComponents/dropdownWithIcon';
import {DropdownItem} from './types';

export default function ExperienceFilter({
  setShowModal,
}: {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [experienceYear, setExperienceYear] = useState<
    DropdownItem | undefined
  >();
  const {isDark} = useValues();

  return (
    <View
      style={[
        GlobalStyle.modal,
        {backgroundColor: isDark ? appColors.darkCard : appColors.white},
      ]}>
      <CancelHeader
        title={'servicemen.filterBy'}
        leftTitle={'filterModal.clearAll'}
        gotoScreen={() => {
          setShowModal(false);
        }}
        onButtonClick={() => setShowModal(false)}
      />
      <Title
        title="servicemen.experience"
        titleStyle={{marginTop: windowHeight(4)}}
      />
      <DropdownWithIcon
        icon={<Experience />}
        label="servicemen.highestExperience"
        data={experienceOptions}
        onSelect={setExperienceYear}
        dropdownStyle={{marginHorizontal: 0}}
      />

      <View
        style={[
          GlobalStyle.horizontalLine,
          {
            marginBottom: windowHeight(2),
            borderColor: isDark ? appColors.darkBorder : appColors.border,
          },
        ]}></View>
      <Title title="filterModal.ratings" />
      <RatingSection
        selectedRating={selectedRating}
        setSelectedRating={setSelectedRating}
      />
      <GradientBtn
        label={'filterModal.applyBtn'}
        onPress={() => {
          setShowModal(false);
        }}
        additionalStyle={{marginHorizontal: windowWidth(0)}}
      />
    </View>
  );
}
