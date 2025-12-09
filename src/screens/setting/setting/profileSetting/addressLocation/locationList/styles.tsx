import appColors from '@theme/appColors';
import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container:{
        marginTop:windowWidth(5),
        marginHorizontal:windowWidth(4)
    },
    title:{
        color:appColors.lightText,
        fontFamily:appFonts.NunitoMedium,
        fontSize:fontSizes.FONT4
    },
    notesText:{
        color:appColors.lightText,
        fontFamily:appFonts.NunitoRegular,
        fontSize:fontSizes.FONT3,
        marginTop:windowWidth(3),
        lineHeight:windowHeight(2)
    }
});
