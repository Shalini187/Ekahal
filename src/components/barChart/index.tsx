import React, { useEffect, useState } from "react";
import { BarChart } from "react-native-chart-kit";
import firestore from '@react-native-firebase/firestore';
import { Dimensions, View } from "react-native";
import { chartConfig } from "../../utils";

const screenWidth = Dimensions.get("window").width;

const BarCharts = () => {
    let [state, setState] = useState<any>({ userId: '', data: '' });

    useEffect(() => {
        init();
        () => { return; }
    }, [])

    let init = async () => {
        await firestore().collection('BarData').doc('WcYNTc31LdiHZCzkJlwF').onSnapshot(documentSnapshot => {
            setState({ ...state, userId: documentSnapshot.id, data: documentSnapshot.data() });
        });
    };

    return (
        <View style={{ width: screenWidth }}>
            {
                state?.data ?
                    <BarChart
                        data={state?.data}
                        width={screenWidth}
                        height={300}
                        yAxisLabel="$"
                        chartConfig={chartConfig}
                    />
                    :
                    <></>
            }
        </View>
    )
}

export default BarCharts;