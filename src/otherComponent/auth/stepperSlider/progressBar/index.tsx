import React from 'react';
import {View, SafeAreaView} from 'react-native';
import {styles} from './styles';
import GradientBtn from '@commonComponents/gradientBtn';
import {progressTypes} from './types';
import {useValues} from '../../../../../App';
import appColors from '@theme/appColors';

export default function ProgressBar({
  renderProgressIndicator,
  renderScreen,
  handleNextStep,
  handlePrevStep,
  currentStep,
  stepCount,
}: progressTypes) {
  const {isDark} = useValues();
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={[
          styles.progressContainer,
          {backgroundColor: isDark ? appColors.darkCardBg : appColors.white},
        ]}>
        <View style={styles.progressIndicatorContainer}>
          {renderProgressIndicator()}
        </View>
      </View>
      <View style={styles.stepContainer}>
        {renderScreen()}
        <GradientBtn
          label={currentStep == stepCount ? 'common.finish' : 'common.next'}
          onPress={handleNextStep}
        />
        {/* {currentStep > 1 && <GradientBtn
          label={'newDeveloper.BackButton'}
          onPress={handlePrevStep}
        />} */}
        
      </View>
      
    </SafeAreaView>
  );
}
