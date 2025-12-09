import appColors from '@theme/appColors';
import { fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container:{
        marginVertical:windowWidth(3),
        flexDirection:"row",
        justifyContent:"space-between",
        marginHorizontal:windowWidth(6),
        alignItems:"center",
        marginTop:windowHeight(3)
    },
    row:{
        flexDirection:"row"
    },
    innerContainer:{
       paddingHorizontal:windowWidth(4),
       paddingVertical:windowWidth(3),
        borderRadius:windowWidth(2),
        alignItems:"center",
        justifyContent:"center",
       
    },
    title:{
        color:appColors.lightText,
        fontFamily:appFonts.NunitoMedium,
        fontSize:fontSizes.FONT4HALF
    },
    content:{
        fontFamily:appFonts.NunitoSemiBold,
        fontSize:fontSizes.FONT4HALF,
        color:appColors.darkText
    }

});
