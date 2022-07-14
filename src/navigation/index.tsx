import { Navigation } from "react-native-navigation";


export function coverScreen() {
    return (
        Navigation.setRoot({
            root: {
                stack: {
                    children: [
                        {
                            component: {
                                id: 'na.CoverScreen',
                                name: 'na.CoverScreen',
                                options: {
                                    topBar: {
                                        visible: false,
                                    },
                                    bottomTabs: {
                                        visible: false,
                                    },
                                },
                            }
                        }
                    ]
                }
            }
        })
    );
}

export function postLogin(props?: any) {
    return (
        Navigation.setRoot({
            root: {
                bottomTabs: {
                    children: [
                        {
                            stack: {
                                children: [
                                    {
                                        component: {
                                            id: 'na.Trends',
                                            name: 'na.Trends',
                                            options: {
                                                topBar: { visible: false },
                                                bottomTab: {
                                                    icon: require('../assets/raise.png'),
                                                    selectedIcon: require('../assets/raise_w.png'),
                                                },
                                            },
                                        },
                                    },
                                ],
                            },
                        },
                        {
                            stack: {
                                children: [
                                    {
                                        component: {
                                            id: 'na.Charts',
                                            name: 'na.Charts',
                                            passProps: props,
                                            options: {
                                                topBar: { visible: false },
                                                bottomTab: {
                                                    icon: require('../assets/chart.png'),
                                                    selectedIcon: require('../assets/chart_w.png'),
                                                },
                                            },
                                        },
                                    },
                                ],
                            },
                        },
                        {
                            stack: {
                                children: [
                                    {
                                        component: {
                                            id: 'na.News',
                                            name: 'na.News',
                                            options: {
                                                topBar: { visible: false },
                                                bottomTab: {
                                                    icon: require('../assets/news.png'),
                                                    selectedIcon: require('../assets/news_w.png'),
                                                },
                                            },
                                        },
                                    },
                                ],
                            },
                        },
                        {
                            stack: {
                                children: [
                                    {
                                        component: {
                                            id: 'na.Profile',
                                            name: 'na.Profile',
                                            options: {
                                                topBar: { visible: false },
                                                bottomTab: {
                                                    icon: require('../assets/user.png'),
                                                    selectedIcon: require('../assets/user_w.png'),
                                                },
                                            },
                                        },
                                    },
                                ],
                            },
                        }
                    ],
                    options: {
                        bottomTabs: {
                            tabsAttachMode: 'onSwitchToTab',
                            titleDisplayMode: 'alwaysHide'
                        }
                    },
                },
            },
        })
    );
};

export function goTo(screenName: string, componentId: string, props: {}) {
    return (
        Navigation.push(componentId, {
            component: {
                name: screenName,
                passProps: { ...props },
                options: {
                    topBar: { visible: false, drawBehind: false },
                    bottomTabs: { visible: false, drawBehind: false }
                }
            }
        })
    );
};

export const goBack = (componentId: string) => Navigation.pop(componentId);