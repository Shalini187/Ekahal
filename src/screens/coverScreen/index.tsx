import React, { useState } from 'react';
import { Dimensions, ImageBackground, View } from 'react-native';
import { IntoCards } from "../../components";

const { height } = Dimensions.get('screen');

const CoverScreen = (props: any) => {
    let { componentId } = props || {};

    const [sliderState, setSliderState] = useState<any>({ currentPage: 0 });
    let images = require('../../assets/Intro.jpg');

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={images}
                style={{ height }}
                children={
                    <IntoCards sliderState={sliderState} setSliderState={setSliderState} componentId={componentId} />
                } />
        </View>
    )
}

export default CoverScreen;