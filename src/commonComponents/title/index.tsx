import {View, Text, ViewStyle} from 'react-native';
import {StyleSheet} from 'react-native';
import appColors from '../../theme/appColors';
import appFonts from '../../theme/appFonts';
import {fontSizes, windowHeight} from '../../theme/appConstant';
import { useValues } from '../../../App';
export default function Title({
  title,
  titleStyle,
  color,
}: {
  title: string;
  titleStyle?: ViewStyle;
  color?: string;
}) {
  const {t} = useValues()
  return (
    <View>
      <Text
        style={[
          styles.titleStyle,
          titleStyle,
          {color: color ? color : appColors.lightText},
        ]}>
        {t(title)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleStyle: {
    color: appColors.lightText,
    fontFamily: appFonts.NunitoSemiBold,
    fontSize: fontSizes.FONT4,
    marginTop: windowHeight(1.5),
  },
});
