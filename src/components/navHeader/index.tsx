import React from 'react';
import { View, Text, SafeAreaView, Pressable, ImageBackground } from 'react-native';
import { Icon } from "react-native-material-ui";
import { goBack } from '../../navigation';
import { header } from '../../styles';

interface IProps {
    name?: string;
    title: string;
    color?: string;
    componentId: string;
    rightProps?: Function;
}

const NavHeader = (props: IProps) => {
    let { title, componentId, rightProps, name = 'arrow-left', color = '#000' } = props;

    let handleBackPress = () => goBack(componentId);

    let { image, row, text } = header || {};

    return (
        <ImageBackground
            style={image}
            source={require('../../assets/bgIntro.jpg')}
            children={
                <SafeAreaView style={header.headerContainer}>
                    <View style={row}>
                        <Pressable onPress={handleBackPress}>
                            <Icon name={name} color={color} size={34} />
                        </Pressable>
                        <Text style={text}>{title}</Text>
                    </View>
                    {rightProps?.()}
                </SafeAreaView>
            }
        />
    );
}

export default NavHeader;