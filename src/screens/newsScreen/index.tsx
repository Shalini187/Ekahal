import React, { useState } from "react"
import { FlatList, Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { NavHeader } from "../../components";
import { mainContainer, thirdScreen } from "../../styles";

const NewsScreen = (props: any) => {
    let { componentId } = props || {};
    let [toggle, setToggle] = useState<boolean>(false);

    let buttonData = [
        {
            name: 'Editoral',
            color: 'white',
            onPress: () => setToggle(!toggle),
        },
        {
            name: `Crypto News`,
            color: 'white',
            onPress: () => { },
        },
        {
            name: 'Raw Material',
            color: 'white',
            onPress: () => setToggle(!toggle),
        },
        {
            name: `Economic`,
            color: 'white',
            onPress: () => { }
        }
    ];

    let transcationList = [
        {
            name: 'Samsung',
            description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`,
            image: require("../../assets/news1.png")
        },
        {
            name: 'Apple',
            description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`,
            image: require("../../assets/news2.png")
        },
        {
            name: 'Alantia',
            description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`,
            image: require("../../assets/news3.png"),
        },
        {
            name: 'Xioami',
            description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`,
            image: require("../../assets/news4.png")
        },
    ];

    let renderImage = (height: number = 200, width: any = 300, image?: any) => (
        <Image
            style={{ height, width }}
            source= {image || require('../../assets/bgNews.png')}
        />
    );

    return (
        <>
            <NavHeader title={'News'} componentId={componentId} />
            <View style={mainContainer.container}>
                <FlatList
                    horizontal
                    data={buttonData}
                    style={{ backgroundColor: '#efefef' }}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={({ item, key }: any) => item?.toString()}
                    renderItem={({ item, index }) => {
                        let { onPress, name } = item || {};
                        return (
                            <TouchableOpacity onPress={onPress} style={{ ...thirdScreen.container }}>
                                <Text style={{ color: '#000' }}>{name}</Text>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>

            <View style={{ flex: 8 , padding: 16 }}>
                <View style={{ alignSelf: 'center' }}>
                    {renderImage()}
                </View>
                <FlatList
                    data={transcationList}
                    listKey = {Math.random().toString()}
                    showsVerticalScrollIndicator = {false}
                    contentContainerStyle={{ marginBottom: 250 }}
                    keyExtractor={({ item, index }: any) => index?.toString()}
                    renderItem={({ item, index }) => {
                        let { name, description, image } = item || {};
                        return (
                            <View style={{ flexDirection: 'row', margin: 4, borderColor: '#c3c3c3', borderBottomWidth: 0.7 }}>
                                <View style={{ width: '35%', alignSelf: 'center' }}>{renderImage(100, 100, image)}</View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View style={{ width: '70%'}}>
                                        <View style={{ marginVertical: 4 }} key={index + 20}>
                                            {<Text style = {{ fontWeight: 'bold', fontSize: 18}}>{name}</Text>}
                                        </View>
                                        <View style={{ marginVertical: 4 }} key={index + 10}>
                                            {<Text style = {{ flexWrap: 'wrap', textAlign: 'justify'}}>{description}</Text>}
                                        </View>
                                    </View>
                                </View>
                                
                            </View>
                        )
                    }}
                />
            </View>
        </>
    )
}

export default NewsScreen;