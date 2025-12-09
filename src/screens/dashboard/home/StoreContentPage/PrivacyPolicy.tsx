import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import appColors from '@src/theme/appColors';
import { useValues } from '../../../../../App';
import Header from '@src/commonComponents/header';
import HTMLView from 'react-native-htmlview';
import { windowHeight, windowWidth } from '@src/theme/appConstant';
import { getStoreAppUrl } from '@src/config/utility';

//About us content
export default function PrivacyPolicyContent({ route }: any) {
    const { isDark } = useValues()
    const [htmlContent, setHtmlContent] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        const fetchHtml = async () => {
            try {
                const response = await fetch(`${getStoreAppUrl()}/privacy-policy`);
                const text = await response.text();
                const pTags = text.match(/<p[^>]*>(.*?)<\/p>/g);
                const paragraphs = pTags ? pTags.join('') : '';
                setHtmlContent(paragraphs);
            } catch (error) {
                console.error('Error fetching HTML content:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchHtml();
    }, []);

    if (loading) {
        return (
            <View style={[styles.loadingContainer, { backgroundColor: isDark ? appColors.darkTheme : appColors.white }]}>
                <ActivityIndicator size="large" color={appColors.primary} />
            </View>
        );
    }
    return (
        <ScrollView style={[styles.container, { backgroundColor: isDark ? appColors.darkTheme : appColors.white }]}>
            <Header
                title={`newDeveloper.PrivacyPolicy`}
                showBackArrow={true}
            />
            <View style={{ marginHorizontal: windowWidth(5), marginVertical: windowHeight(2) }}>
                <HTMLView
                    value={htmlContent}
                    stylesheet={isDark ? darkhtmlStyles : whitehtmlStyles}
                />
            </View>
        </ScrollView>
    );
};
const darkhtmlStyles = StyleSheet.create({
    p: {
        fontSize: 16,
        lineHeight: 24,
        color: appColors.white
    },
    a: {
        color: appColors.white,
    },
});
const whitehtmlStyles = StyleSheet.create({
    p: {
        fontSize: 16,
        lineHeight: 24,
        color: appColors.darkText
    },
    a: {
        color: appColors.darkText,
    },
});
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,

    },
    content: {
        fontSize: 18,
        lineHeight: 24,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});


