import React, { useState } from "react"
import { FlatList, Pressable, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-material-ui";
import { NavHeader } from "../../components";
import { goTo } from "../../navigation";
import { fourthScreen, mainContainer, thirdScreen } from "../../styles";
import { filterVal } from "../../utils";

const TrendScreen = (props: any) => {
    let { componentId } = props || {};
    let [toggle, setToggle] = useState<boolean>(false);
    let [state, setState] = useState<any>('');

    let buttonData = [
        {
            name: 'Index',
            color: 'white',
            onPress: () => setToggle(!toggle),
        },
        {
            name: `Shares`,
            color: 'white',
            onPress: () => { }
        },
        {
            name: 'Currencies',
            color: 'white',
            onPress: () => setToggle(!toggle),
        },
        {
            name: `Futures`,
            color: 'white',
            onPress: () => { }
        }
    ];

    let transcationList = [
        {
            name: 'Andy John',
            city: '12:04:05 MADRID',
            amount: '20470.04',
            rate: '+203 (+1,04%)'
        },
        {
            name: 'Mercy Francis',
            city: '12:04:05 LONDON',
            amount: '1033.333',
            rate: '+203 (+1,04%)'
        },
        {
            name: 'Onome Mercy',
            city: '12:04:05 NYSE',
            amount: '9022.000',
            rate: '+203 (+1,04%)'
        },
        {
            name: 'Kingley Lord',
            city: '12:04:05 ASIA',
            amount: '10000.22',
            rate: '+203 (+1,04%)'
        },
        {
            name: 'Kingley Lord',
            city: '12:04:05 LONDON',
            amount: '9062.11',
            rate: '+203 (+1,04%)'
        },
        {
            name: 'Andy John',
            city: '12:04:05 MADRID',
            amount: '20470.04',
            rate: '+203 (+1,04%)'
        },
        {
            name: 'Mercy Francis',
            city: '12:04:05 LONDON',
            amount: '1033.333',
            rate: '+203 (+1,04%)'
        },
        {
            name: 'Onome Mercy',
            city: '12:04:05 NYSE',
            amount: '9022.000',
            rate: '+203 (+1,04%)'
        },
        {
            name: 'Kingley Lord',
            city: '12:04:05 ASIA',
            amount: '10000.22',
            rate: '+203 (+1,04%)'
        },
        {
            name: 'Kingley Lord',
            city: '12:04:05 LONDON',
            amount: '9062.11',
            rate: '+203 (+1,04%)'
        }
    ];

    return (
        <>

            <NavHeader title={'TRADIX'} componentId={componentId} />

            <View style={fourthScreen.centeredView}>
                <View style={fourthScreen.modalView}>
                    <TextInput
                        value={state}
                        style={fourthScreen.input}
                        keyboardType={'default'}
                        placeholderTextColor={'#c3c3c3'}
                        placeholder={'Enter the key to search...'}
                        onChangeText={(text: string) => setState(text)}
                    />
                    <Icon name={'search'} color={'#000'} size={28} style={{ padding: 8 }} />
                </View>
            </View>

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
            <View style={{ flex: 8, padding: 16 }}>

                <FlatList
                    data={filterVal(transcationList, state)}
                    showsVerticalScrollIndicator = {false}
                    listKey = {Math.random().toString()}
                    contentContainerStyle={{ paddingBottom: 75, padding: 16 }}
                    keyExtractor={({ item, index }: any) => index?.toString()}
                    renderItem={({ item, index }) => {
                        let { name, amount, city, rate } = item || {};
                        return (
                            <Pressable key={index + 20} onPress={() => { }} style={{ padding: 16, flexDirection: 'row', borderColor: '#c3c3c3', borderBottomWidth: 0.5, top: '7%' }}>
                                <View style={{ width: '100%' }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{ color: '#000', fontSize: 16, fontWeight: 'bold' }}>{name}</Text>
                                        <View style={{ backgroundColor: '#00D100', width: 80, borderRadius: 20, alignItems: 'flex-end' }}>
                                            <Text style={{ color: '#000', opacity: 1, padding: 8 }}>{amount}</Text>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{ fontSize: 16 }}>{city}</Text>
                                        <Text style={{ fontSize: 16 }}>{rate}</Text>
                                    </View>
                                </View>
                            </Pressable>
                        )
                    }}
                />
            </View>

        </>
    )
}

export default TrendScreen;