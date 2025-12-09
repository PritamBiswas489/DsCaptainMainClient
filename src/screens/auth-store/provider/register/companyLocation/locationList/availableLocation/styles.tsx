import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container:{
        marginTop:windowHeight(2),
        borderColor:appColors.border,
        borderWidth:1,
        borderRadius:windowHeight(1),
        paddingHorizontal:windowHeight(1),
        paddingVertical:windowWidth(4)
    },
    innerContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:windowWidth(2)
    },
    row:{
        flexDirection:"row"
    },
    mapContainer:{
        height:windowHeight(6),
        width:windowWidth(12),
        backgroundColor:appColors.border,
        borderRadius:windowWidth(3),
        alignItems:"center",
        justifyContent:"center"
    },
    address:{
        color:appColors.darkText,
        fontFamily:appFonts.NunitoMedium,
        fontSize:fontSizes.FONT4
    },
    country:{
        color:appColors.lightText,
        fontFamily:appFonts.NunitoRegular,
        fontSize:fontSizes.FONT4,
        marginTop:3
    },
    delete:{
        color:appColors.primary,
        fontFamily:appFonts.NunitoSemiBold,
        fontSize:fontSizes.FONT4,
        textDecorationLine:"underline"
    },
    textContainer:{
        paddingHorizontal:windowWidth(3)
    },
    horizontalView:{
        marginBottom:windowWidth(4),
        marginHorizontal:windowWidth(2)
    }
});
