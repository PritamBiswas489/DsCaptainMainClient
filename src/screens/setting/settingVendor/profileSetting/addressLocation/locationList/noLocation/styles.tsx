import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    imageStyle:{
        height:windowHeight(10),
        width:windowWidth(90),
        resizeMode:"contain",
        marginTop:windowHeight(2)
    },
    innerContainer:{
        alignItems:"center",
        justifyContent:"center"
    },
    content:{
        color:appColors.darkText,
        fontFamily:appFonts.NunitoMedium,
        fontSize:fontSizes.FONT3HALF,
        textAlign:"center" ,
        marginTop:windowWidth(4),
        marginHorizontal:windowWidth(8),
        lineHeight:windowWidth(5)
        
    },
    textStyle:{
        color:appColors.primary,
        fontFamily:appFonts.NunitoSemiBold,
        fontSize:fontSizes.FONT4,
        marginTop:windowHeight(2),
        textTransform:"uppercase",
        textDecorationLine:"underline"
    }
});
