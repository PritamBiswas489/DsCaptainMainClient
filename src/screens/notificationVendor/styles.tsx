import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: windowHeight(3),
    backgroundColor: appColors.boxBg,
    borderRadius: windowHeight(1),
    borderWidth: 1,
    borderColor: appColors.border,
    elevation: 0.5,
    padding: windowHeight(2),
  },
  marginTop: {
    marginTop: windowHeight(3),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoBold,
    fontSize: windowWidth(4.2),
  },
  dot: {
    height: windowHeight(0.7),
    width: windowWidth(1.4),
    borderRadius: windowHeight(12),
    backgroundColor: appColors.darkText,
    marginHorizontal: windowWidth(2),
    marginTop: windowWidth(1),
  },
  time: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoSemiBold,
    fontSize: windowWidth(3.6),
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    color: appColors.darkText,
    fontFamily: appFonts.NunitoMedium,
    fontSize: windowWidth(3.6),
    width: windowWidth(80),
    marginTop: windowHeight(0.8),
  },
  circleView: {
    height: windowWidth(9.5),
    width: windowWidth(9.5),
    borderRadius: windowHeight(10),
    backgroundColor: appColors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: windowHeight(1),
  },
  image: {
    height: windowHeight(20),
    width: windowWidth(30),
    resizeMode: 'contain',
    marginTop: windowHeight(1.2),
  },
  person: {
    height: windowHeight(10),
    width: windowWidth(10),
    resizeMode: 'contain',
  },
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  
  // NEW PROFESSIONAL STYLES
  notificationCard: {
    // marginHorizontal: windowWidth(3),
    marginVertical: windowHeight(1),
    backgroundColor: appColors.white,
    // borderRadius: windowHeight(2),
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
  },
  notificationCardDark: {
    backgroundColor: appColors.darkText || '#2a2a2a',
  },
  cardHeader: {
    paddingHorizontal: windowWidth(4),
    paddingVertical: windowHeight(1.5),
    borderBottomWidth: 1,
    borderBottomColor: appColors.border,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLeft: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: windowWidth(4.5),
    fontFamily: appFonts.NunitoBold,
    marginBottom: windowHeight(0.3),
  },
  notificationTime: {
    fontSize: windowWidth(3.2),
    fontFamily: appFonts.NunitoSemiBold,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardBody: {
    padding: windowWidth(4),
  },
  notificationDescription: {
    fontSize: windowWidth(3.5),
    fontFamily: appFonts.NunitoMedium,
    lineHeight: windowHeight(2.8),
    marginBottom: windowHeight(1.2),
  },
  imageContainer: {
    backgroundColor: appColors.white,
    borderRadius: windowHeight(1.5),
    overflow: 'hidden',
    marginTop: windowHeight(0.8),
    borderWidth: 1,
    borderColor: appColors.border,
  },
  notificationImage: {
    height: windowHeight(22),
    width: '100%',
    resizeMode: 'cover',
  },
  statusBadge: {
    paddingHorizontal: windowWidth(2.5),
    paddingVertical: windowHeight(0.5),
    borderRadius: windowHeight(1),
    alignSelf: 'flex-start',
  },
  statusBadgeText: {
    fontSize: windowWidth(2.8),
    fontFamily: appFonts.NunitoBold,
    color: appColors.white,
  },
  timelineIndicator: {
    width: windowWidth(1.2),
    height: windowHeight(1.2),
    borderRadius: windowHeight(0.6),
    backgroundColor: appColors.primary,
    marginRight: windowWidth(2),
  },
});

