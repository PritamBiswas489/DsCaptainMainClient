import {StyleSheet} from 'react-native';
import appColors from '@theme/appColors';
import {windowHeight,windowWidth } from '@theme/appConstant';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerView: {
    position: 'absolute',
    marginHorizontal: windowHeight(0.6),
    marginTop: windowHeight(1.5),
    zIndex:99999,
    
  },
  circleView:{
    backgroundColor: appColors.white,
    borderColor: appColors.border,
    borderWidth: 2,
    height:windowHeight(5),
    width:windowWidth(10),
    borderRadius:windowWidth(20),
    alignItems:"center",
    justifyContent:"center",
    
  },
  bottomView: {
    position: 'absolute',
    bottom: 0,
  },
  directionView: {
    bottom: windowHeight(4),
    width: windowWidth(97),
    flexDirection: 'row-reverse',
  },
  directionContainer: {
    height: windowHeight(4.6),
    width: windowWidth(9),
    backgroundColor: appColors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowHeight(1),
  },
  centerView:{
    alignItems:"center",
    justifyContent:"center",
    flex:1
  }
});


