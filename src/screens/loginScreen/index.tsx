import React, { useState } from "react";
import { Alert, ImageBackground, KeyboardAvoidingView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { introStyles, loginScreen } from "../../styles";
import { isIos, signIn, signUp } from "../../utils";

interface IUser {
    [x: string]: string | undefined;
    Email: string;
    Password: string;
}

const Login = (props: any) => {
    let { componentId } = props || {};

    const [form, setForm] = useState<IUser>({ Email: '', Password: '' });
    let [hidePassword, togglePassword] = useState<boolean>(true);

    let behavior: any = isIos() ? 'padding' : null;

    let { fontText } = introStyles || {};

    const { subText, imageNew, loginText, loginLayout, viewLayout, inputContainer, button: buttons, welcomeText } = loginScreen || {};

    return (
        <View style={{ flex: 1 }}>
            <KeyboardAvoidingView behavior={behavior} style={{ flex: 1 }} enabled>
                <View>
                    <ImageBackground
                        style={imageNew}
                        source={require('../../assets/bgIntro.jpg')}
                    />
                </View>

                <View style={viewLayout}>
                    <ScrollView
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}>
                        <View style={loginLayout}>
                            <Text style={loginText}>{'TRADIX'}</Text>
                            <Text style={subText}>
                                {'The future of crypto.'}
                            </Text>
                        </View>
                        <Text style={welcomeText}>{'Welcome!'}</Text>
                        <View style={{ top: '8%', marginVertical: 8 }}>
                            {Object.keys(form)?.map((item: any, index: number) => (
                                <TextInput
                                    key={index}
                                    style={inputContainer}
                                    autoCapitalize={'none'}
                                    testID={item}
                                    placeholder={item}
                                    value={form?.item}
                                    onChangeText={(nextValue: any) => {
                                        setForm({ ...form, [item]: nextValue });
                                    }}
                                    secureTextEntry={
                                        item == 'Password' ? hidePassword : false
                                    }
                                />
                            ))}
                        </View>
                        <View style={{ top: '15%' }}>
                            <TouchableOpacity onPress={() => signIn(form)} >
                                <LinearGradient
                                    start={{ x: 1, y: 1 }}
                                    end={{ x: 0, y: 1 }}
                                    colors={['#370BF0', '#F020D8']}
                                    style={buttons}
                                >
                                    <Text style={{ ...fontText, alignSelf: 'center', padding: 16 }}>{'SIGN IN'}</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                        <View style={{ top: '30%' }}>
                            <TouchableOpacity onPress={() => {
                                Alert.alert(
                                    'Register',
                                    'Are you sure you want to Regsiter entered EmailID ?',
                                    [
                                        {
                                            text: 'Yes',
                                            onPress: () => signUp(form),
                                            style: 'destructive',
                                        },
                                        { text: 'No', style: 'cancel' },
                                    ],
                                    { cancelable: false },
                                );
                            }} >
                                <LinearGradient
                                    start={{ x: 1, y: 1 }}
                                    end={{ x: 0, y: 1 }}
                                    colors={['#370BF0', '#F020D8']}
                                    style={buttons}
                                >
                                    <Text style={{ ...fontText, alignSelf: 'center', padding: 16 }}>{'SIGN UP'}</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}

export default Login;