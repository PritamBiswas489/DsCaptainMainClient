type FontName =
  | 'NunitoExtraBold'
  | 'NunitoRegular'
  | 'NunitoMedium'
  | 'NunitoBold'
  | 'NunitoBlack'
  | 'NunitoSemiBold';

const appFonts: Record<FontName, string> = {
  NunitoExtraBold: 'Nunito-ExtraBold',
  NunitoRegular: 'Nunito-Regular',
  NunitoMedium: 'Nunito-Medium',
  NunitoBold: 'Nunito-Bold',
  NunitoBlack: 'Nunito-Black',
  NunitoSemiBold: 'Nunito-SemiBold',
};

export default appFonts;
