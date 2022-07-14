import React, { useEffect, useState } from "react";
import { Alert, Image, Pressable, Text, View } from "react-native";
import { Icon } from "react-native-material-ui";
import auth from '@react-native-firebase/auth';
import { NavHeader } from "../../components";
import { signOut } from "../../utils";

let ProfileScreen = (props: any) => {
    let { componentId } = props || {};
    const [user, setUser] = useState<any>({});

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged((user: any) => {
            setUser(user);
        });
        return subscriber;
    }, []);

    let renderRight = () => (
        <Pressable style={{ padding: 16 }} onPress={() => {
            Alert.alert(
                'Log Out',
                'Are you sure you want to Log out ?',
                [
                    {
                        text: 'Log out',
                        onPress: () => {
                            signOut();
                        },
                        style: 'destructive',
                    },
                    { text: 'Cancel', style: 'cancel' },
                ],
                { cancelable: false },
            );
        }}>
            <Icon
                color={"black"}
                name={'logout'}
                style={{ height: 24, width: 24 }}
            />
        </Pressable>
    )

    return (
        <>
            <View style={{ flex: 1 }}>
                <NavHeader title={'Profile'} componentId={componentId} rightProps={() => renderRight()} />
                <View style={{ flex: 8 }}>
                    <View style={{ alignSelf: 'center' }}>
                        <Image
                            style={{ height: 200, width: 200 }}
                            source={require('../../assets/profile.jpeg')}
                        />
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{user?.email}</Text>
                    </View>
                </View>
            </View>
        </>
    )
}

export default ProfileScreen;

