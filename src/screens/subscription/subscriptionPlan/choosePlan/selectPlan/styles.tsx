import appColors from '@theme/appColors';
import { fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container:{
        marginHorizontal:windowHeight(2),
        marginTop:windowWidth(2)
    },
    containerView:{
         alignItems:"center",
         justifyContent:"center",
         position:"absolute",
         top:0,
        height:windowHeight(5),
        width:windowWidth(28.3),
    },
    innerView:{
         backgroundColor:appColors.border,
         paddingHorizontal:windowWidth(5),
         borderRadius:windowWidth(7),
         borderColor:appColors.boxBg,
         borderWidth:1,  
         alignItems:"center",
         justifyContent:"center",
         height:windowHeight(4),
         paddingVertical:windowWidth(1),
         paddingTop:windowHeight(1)
    },
    innerContainer:{
        borderRadius:windowWidth(2),
        borderWidth:1.3,
        backgroundColor:appColors.boxBg,
        alignItems:"center",
        justifyContent:"center",
        width:windowWidth(28),
        height:windowHeight(18),
        paddingBottom: windowHeight(2),
        marginTop:windowWidth(4),
        paddingTop:windowHeight(4)
    },
    price:{
        fontFamily:appFonts.NunitoSemiBold,
        color:appColors.darkText,
        fontSize:fontSizes.FONT6
    },
    textStyle:{
        color:appColors.lightText,
        fontFamily:appFonts.NunitoMedium,
        fontSize:fontSizes.FONT4,
        marginTop:windowHeight(1)
    },
    row:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginTop:windowHeight(2),
        paddingHorizontal:windowWidth(4),
        width:windowWidth(30),
       
    },
    title:{
        color:appColors.darkText,
        fontFamily:appFonts.NunitoMedium,
        fontSize:fontSizes.FONT4
    },
    name:{
        color:appColors.lightText,
        fontFamily:appFonts.NunitoSemiBold,
        fontSize:windowWidth(3.4),
        height:windowHeight(3),
        textAlign:"center"
       
    },
    seperator:{
        marginHorizontal:7
    }
});
