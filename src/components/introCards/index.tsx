import React from "react";
import { Dimensions, ScrollView, Text, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { goTo } from "../../navigation";
import { introStyles } from "../../styles";
import { buttonArray, NUM_LEN } from "../../utils";

const { width } = Dimensions.get('window');

interface IntroProps {
    sliderState: {
        currentPage: number
    };
    setSliderState: Function;
    componentId?: string;
}

const IntoCards = (props: IntroProps) => {
    let { sliderState, setSliderState, componentId }: any = props || {};
    let { paginationWrapper, paginationDots, header, wrapper, paragraph, button, fontText } = introStyles || {};

    const { currentPage: pageIndex } = sliderState;

    const setSliderPage = (event: any) => {
        const { currentPage } = sliderState;
        const { x } = event.nativeEvent.contentOffset;
        const indexOfNextScreen = Math.floor(x / width);
        if (indexOfNextScreen !== currentPage) {
            setSliderState({ ...sliderState, currentPage: indexOfNextScreen });
        }
    };

    const handleNavigation = () => {
        goTo('na.Login', componentId, {});
    }

    return (
        <>
            <TouchableOpacity onPress={handleNavigation} style={{ flex: 1, alignSelf: 'flex-end', top: '10%', paddingHorizontal: 16 }}>
                <Text style={{ fontWeight: 'bold' }}>{'SKIP'}</Text>
            </TouchableOpacity>
            <ScrollView
                style={{ flex: 1 }}
                horizontal={true}
                scrollEventThrottle={16}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                onScroll={(event: any) => setSliderPage(event)}
            >
                {
                    buttonArray?.map((i, k) => {
                        let { header: headerText, title } = i || {};
                        return (
                            <View key={k} style={{ width, height: '100%' }}>
                                <View style={wrapper}>
                                    <Text style={header}>{headerText}</Text>
                                    <Text style={paragraph}>{title}</Text>

                                    <TouchableOpacity onPress={() => setSliderState({ ...sliderState, currentPage: pageIndex < (NUM_LEN - 1) ? pageIndex + 1 : NUM_LEN - pageIndex - 1 })} >
                                        <LinearGradient
                                            start={{ x: 0, y: 0 }}
                                            end={{ x: 1, y: 1 }}
                                            colors={['#5851DB', '#C13584']}
                                            style={button}
                                        >
                                            <Text style={fontText}>{pageIndex < (NUM_LEN - 1) ? 'NEXT' : 'PREV'}</Text>
                                        </LinearGradient>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    })
                }
            </ScrollView>
            <View style={paginationWrapper}>
                {Array.from(Array(NUM_LEN).keys()).map((key, index) => (
                    <View style={[paginationDots, { opacity: pageIndex === index ? 1 : 0.2 }]} key={index} />
                ))}
            </View>
        </>
    );
};

export default IntoCards;