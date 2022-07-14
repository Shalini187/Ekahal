import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import firestore from '@react-native-firebase/firestore';
import { BezierChart, NavHeader, BarCharts, ProgressCharts } from "../../components";

const ChartScreen = (props: any) => {
    let { componentId } = props || {};

    return (
        <>
            <View style={{ flex: 0.15 }}>
                <NavHeader title={'DASHBOARD'} componentId={componentId} />
            </View>
            <ScrollView
                contentContainerStyle={{ paddingBottom: 150 }}
                showsVerticalScrollIndicator={false}
                style={{ flex: 14 }}>
                <View style={{ flex: 3 }}>
                    <BezierChart />
                </View>

                <View style={{ flex: 4, top: '3%' }}>
                    <ProgressCharts />
                </View>

                <View style={{ flex: 3, top: '6%' }}>
                    <BarCharts />
                </View>
            </ScrollView>
        </>
    )
}

export default ChartScreen;